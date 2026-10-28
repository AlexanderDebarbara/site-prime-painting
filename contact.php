<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'This form only accepts POST requests.');
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 12000) {
    respond(413, false, 'Your message is too long. Please shorten it and try again.');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ['https://primepaintingorlando.com', 'https://www.primepaintingorlando.com'], true)) {
    respond(403, false, 'This request could not be accepted.');
}

if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') {
    respond(403, false, 'This request could not be accepted.');
}

function field(string $name): string
{
    $value = $_POST[$name] ?? '';
    return is_string($value) ? trim(str_replace("\0", '', $value)) : '';
}

if (field('website') !== '') {
    respond(422, false, 'This request could not be accepted.');
}

$name = field('name');
$email = field('email');
$location = field('location');
$service = field('service');
$details = field('details');
$services = [
    'Interior painting', 'Exterior painting', 'Cabinet refinishing',
    'Popcorn ceiling removal', 'Texture application', 'Ceilings & texture',
    'Commercial painting', 'Multiple services / not sure yet'
];

if ($name === '' || strlen($name) > 400 || $location === '' || strlen($location) > 400 ||
    $details === '' || strlen($details) > 6000 ||
    strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    !in_array($service, $services, true)) {
    respond(422, false, 'Please check your name, email, location, service and project details.');
}

// A short-lived, hashed IP key limits abuse without storing submitted form content.
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/prime-painting-contact-' . hash('sha256', $clientIp);
$rateHandle = @fopen($rateFile, 'c+');
if ($rateHandle !== false) {
    if (flock($rateHandle, LOCK_EX)) {
        $recent = json_decode((string) stream_get_contents($rateHandle), true);
        $recent = is_array($recent) ? array_values(array_filter($recent, static fn ($time): bool => is_int($time) && $time > time() - 600)) : [];
        if (count($recent) >= 5) {
            flock($rateHandle, LOCK_UN);
            fclose($rateHandle);
            respond(429, false, 'Too many requests. Please try again later or send us a text.');
        }
        $recent[] = time();
        rewind($rateHandle);
        ftruncate($rateHandle, 0);
        fwrite($rateHandle, json_encode($recent));
        fflush($rateHandle);
        flock($rateHandle, LOCK_UN);
    }
    fclose($rateHandle);
}

$body = implode("\n", [
    'New free estimate request from primepaintingorlando.com',
    '',
    'Name: ' . $name,
    'Reply email: ' . $email,
    'Project location: ' . $location,
    'Service: ' . $service,
    '',
    'Project details:',
    $details
]);

$headers = [
    'From' => 'Prime Painting Website <contact@primepaintingorlando.com>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8'
];

if (!@mail('contact@primepaintingorlando.com', 'New free estimate request from website', $body, $headers)) {
    error_log('Prime Painting contact form: mail() failed');
    respond(503, false, 'We could not send your request. Please try again or use SMS.');
}

respond(200, true, 'Your request was submitted to Prime Painting.');
