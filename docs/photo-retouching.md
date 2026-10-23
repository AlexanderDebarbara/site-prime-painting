# Photo retouching record

Method: built-in image generation tool, editing the original client photographs. ImageMagick was used only to resize and encode the resulting WebP assets.

Original JPEGs remain in `context/`. Full-resolution edited PNGs are saved in `context/retouched/` (both directories are local and ignored by Git). Public optimized copies live in `assets/images/cleaned/`. Original WebP copies are also retained in `assets/images/`.

Edits target temporary clutter and people. The prompts require preservation of paint colors, layout, fixtures, surface texture and unfinished areas. Generative retouching is not a pixel-exact restoration; the site identifies selected photos as retouched. Images without distracting temporary objects were not regenerated.

## Edited assets and full prompts

### antes1

Source: `context/antes1.jpeg`
Published: `assets/images/cleaned/antes1.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the yellow power drill and battery on the countertop, the white plastic bag on the stove, and the small loose boxes and cleaning tools at the pantry doorway on the far right. Keep the open pantry doorway and its shelving, refrigerator and every dark brown cabinet exactly unchanged.

### antes2

Source: `context/antes2.jpeg`
Published: `assets/images/cleaned/antes2.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the partially visible person at the left edge, the yellow drill and battery at the right countertop, and the loose dish-drying rack in the foreground. Keep all dark cabinetry, existing windows, sliding glass door and outdoor furniture unchanged.

### antes3

Source: `context/antes3.jpeg`
Published: `assets/images/cleaned/antes3.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the loose rectangular black-and-white panel/frame leaning across the left side of the sink, the tall loose glass container on the counter, and the small basket and loose toiletries near the toilet. Keep the small decorative green plant and existing soap dish. Preserve the actual WHITE cabinet doors, metal handles, granite counter, mirror, faucet, toilet, walls and all original surface conditions.

### antes4

Source: `context/antes4.jpeg`
Published: `assets/images/cleaned/antes4.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove ONLY the small loose dark bucket/bin on the floor at the far end of the hallway, directly in front of the dark small cabinet. Leave the small cabinet with its lamp and decorations, the open far door, all walls and their original yellow texture/marks, and all floorboards completely unchanged. No other alterations.

### antes5

Source: `context/antes5.jpeg`
Published: `assets/images/cleaned/antes5.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the clutter ON the dining table (food packets, mugs, bowls, bottles, paper towels, napkins, loose papers and placemats), the yellow strap/tool on the nearest chair and cardboard boxes on the floor beneath the window. Keep the entire dining table and all chairs, couch, side cart, window, curtains, wall shelves, TV and all permanent furniture unchanged. The mustard/gold textured walls are BEFORE painting: do not repaint or smooth them.

### depois1

Source: `context/depois1.jpeg`
Published: `assets/images/cleaned/depois1.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove all temporary loose clutter from both the island and wall countertops: cans, spray bottles, cleaning supplies, dish rack, loose dishes, piles of cloth/bags and small household containers. Keep the sink and faucet, flower vase, coffee maker and permanent appliances. Keep the bright white cabinet doors, silver handles and cabinet layout EXACTLY as photographed.

### depois2

Source: `context/depois2.jpeg`
Published: `assets/images/cleaned/depois2.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove cans and spray bottle from front-left counter, dish rack and dishes behind the sink, and loose clutter/piles on the rear-left countertop. Keep faucet and sink, flower vases and coffee maker. Preserve all bright white cabinets, handles and appliances exactly.

### depois4

Source: `context/depois4.jpeg`
Published: `assets/images/cleaned/depois4.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove ONLY the small loose dark bucket/bin on the floor at the far end of the hallway in front of the small cabinet. Preserve every wall color and texture, the small cabinet and lamp, doors, flooring, lighting and the original unplated light switch. Do not cover exposed fittings or improve finish.

### depois5

Source: `context/depois5.jpeg`
Published: `assets/images/cleaned/depois5.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove all loose clutter ON the dining table (bags, food, mugs, paper rolls, papers, containers and table mats), and remove the work ladder standing against the back-right wall. Keep the dining table, all chairs, couch, standing floor lamp, black ladder-shaped permanent shelving unit at back left, wall shelves, windows and refrigerator unchanged. Preserve the actual cream paint, finish and current condition; do not complete or repair anything.

### depois6

Source: `context/depois6.jpeg`
Published: `assets/images/cleaned/depois6.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the two paint cans sitting beside the stove, the loose soap bottle on the counter, dishes and loose items inside the sink, and the work ladder visible through the far-left doorway. Keep the actual blue-green cabinet finish, glass doors, silver hardware, appliances, counter and sink geometry unchanged. IMPORTANT: the backsplash is unfinished and patchy, with exposed electrical fittings: preserve this EXACT actual state, do not tile, repaint, smooth or repair it.

### portfolio7

Source: `context/portfolio7.jpeg`
Published: `assets/images/cleaned/portfolio7.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the hanging bags/cloths from the door at upper-left and their corresponding reflection in the mirror. Remove the loose papers, toothbrush cups, cleaning bottle, soap dispenser, and black containers on the counter, retaining the small decorative plant. Preserve sink and faucet, exact white cabinetry and gold handles, door, wall color, floor and the gold toilet-paper holder at the right. Keep any fixed hooks and do not smooth or recolor surfaces.

### portfolio9

Source: `context/portfolio9.jpeg`
Published: `assets/images/cleaned/portfolio9.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the stepladder on the right and the loose long white trim strip lying on the floor. Preserve the pink walls AND pink ceiling, white attached baseboards, fan, door, window, wood floor and small original wall hooks exactly as photographed.

### portfolio10

Source: `context/portfolio10.jpeg`
Published: `assets/images/cleaned/portfolio10.webp`

Edit ONLY the supplied real property photograph to remove distracting temporary objects. Photorealistic localized object removal, NOT a renovation or restyling. Preserve EXACT original camera angle, crop, aspect ratio, perspective, architecture, cabinet door/drawer counts and hardware, paint colors, texture, existing surface condition, appliances, fixed lights and natural lighting. Do not improve, repaint, repair, add doors or change workmanship. Reconstruct only the small surfaces occluded by the removed objects using nearby textures. No new decoration. Output a single full photograph, no collage, no labels. Remove the person visible in the mirror, and remove the clutter from the bathroom vanity counter: tall left organizer and all its bottles, red speaker, toothbrush and brush holders, and small containers. Preserve both sinks, both faucets, the central black decorative vase with dark foliage and the matching small black ornaments. Preserve the black cabinetry, silver handles, walls, mirror boundaries, lighting and existing doorway/reflection geometry exactly. Fill the removed person's reflection with the actual doorway and room background, no people.
