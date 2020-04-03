# scca_classifier
SCCA Rules Visual Aid and Classifier

The idea behind this project is simple. Make it easy to understand the SCCA Classifications rules. Focusing mainly on Solo (Autocross) classifications in the beginning. Initial thought is a turbo tax-esque interface that asks a series of questions and tries to determine your class based on the answers. Also, an interactive visual representation of the classes might be useful. The intention is to initially write a web application and then write a mobile application.

## Local Development
To run this project locally, simply start a local webserver to host the files.
I prefer this simple python server.
```
python -m http.server
```

## Rules Breakdown (Just a rough list for v0.1 of this app)
Current iteration of rules: https://www.scca.com/downloads/49336-2020-solo-rules-complete-reduced-2020-03-16/download

### Street Touring
#### Body Work
* Any steering wheel permitted.
* If the OE steering wheel has an airbag, the aftermarket steering wheel must weigh as much as the OE wheel
* no fender flares or cutting
* fender rolling is permitted
* 2-point strut bars may be replaced with 2 point-strut bars
* 3-point strut bars may be replaced with 2 or 3-point strut bars
* subframes or floorpans may not be cut
* subframe connectors are bolted in place not welded

#### Tires
* Must meet all street class requirements
* Max section width up to and including (mm)
* STR (AWD), STS - 225
* STX (AWD), STH - 245
* STR (2WD) - 255
* STU (AWD & 2WD mid-or-rear-engine) - 265
* STU (2WD front-engine) - 285

#### Wheels
* Any wheels permitted with widths up to the following (in.)
* STR (AWD), STS - 7.5
* STX (AWD) - 8.0
* STR (2WD), STX, STH - 9.0
* STU - 11.0

#### Shocks
* Any shocks permitted
* Attachment points to the body/frame/subframe/chassis/suspension member may not be altered
* The attachment system may be changed
* The number of shock absorbers must be the same as standard
* Shock absorbers cannot be adjustable while the car is in motion, unless fitted as OE

#### Brakes
* non-standard brake rotors are permitted
* must be made of ferrous material
* brake ducting is permitted
* ABS may be electrically disabled but not removed or altered in any other way
* an emergency brake of the same type, operation, and actuation as standard must be present
* calipers may be replaced as long as they bolt to the standard locations and the number of pistons
is equal to or greater than standard
* drum brakes may be replaced with disk brakes, but only bolted conversions, not welded ones

#### Anti-Roll (Sway) Bars
* Any anti-roll bar or bushing material is permitted
* No holes may be cut to route new bars or links

#### Suspension
* Ride Height Changes are permitted
* The springs must of the same type as the original (coil, leaf, torsion bar, bellows)
* Springs must use the original mount locations
* Bushings may be replaced with any material except metal
* Bushings may not contain more metal than the standard bushing
* Bushings may not be changed from their original type (e.g. ball and socket replacing a cylindrical bushing),
or the use of an angled hole whose direction differs from the original bushing
* Camber plates are allowed
* Differential mount bushings may be replace but must attach in the standard locations
* The steering rack may not be relocated
* On double/unequal arm (e.g., wishbone, multi-link) suspensions, only the upper arms OR lower
arms may be modified or replaced, but not both. Non-integral longitudinal arms that primarily control
fore/aft wheel movement (e.g., trailing arm(s) or link(s) of a multilink suspension) may not be
replaced, changed, or modified.
* On swing or trailing arm suspensions, the main arms may not be
modified or replaced, but lateral locating links/arms may be modified or replaced.
* Changes in suspension geometry are not allowed except as incidental
to the effective arm length change
* Subframe position may not be changed

#### Electrical
* The voltage of the battery may not be changed
* Batteries may be relocated, but not into the passenger compartment. The area behind the rearmost
seat is not considered to be within the passenger compartment
* The number of batteries may not eb changed
* Electrical enhancement components are not permitted (e.g. condensers, voltage controllers)

#### Engine and Drivetrain
* Windage trays or crankshaft scrapers is not permitted
* OE Traction control systems may be electrically disabled, but not removed or altered in any other
way
* The existing structure of the car may not be modified for the passage of ducting from the air cleaner
to the engine inlet
* Emissions or engine management components in the air intake system, such as a PCV valve or mass
airflow sensor, may not be removed, modified, or replaced, and must retain their original function
along the flow path.
* Body panels may not be cut or altered to facilitate CAC (charge air coolers, intercoolers) installation
* Factory boost piping may not be modified or replaced
* Exhausts can be replaced and relocated
* Catalytic converters can be replaced.
* The location of replacement catalytic converters must be between the cylinder head and and a point
6" further along the exhaust flow path from the original exit of the final OE catalytic converter.
* Replacement converters must have a minimum catalyst density of 100 cells per inch and minimum substrate length of 3"
(76.2mm)
* For all model years
  * The standard PCM/ECU may be reprogrammed without restriction
* For 2005 and older model year vehicles
  * A piggyback ECU is permitted
* 1995 and older vehicles may implement a replacement "stand-alone" PCM/ECU
* Supercharged cars may not change the effective diameter of any pulley which drives the supercharger
* Limited Slip Differentials
* STS - no LSD allowed except for factory standard viscous coupler-type units
* STU, STR, STX, and STH - only standard LSD are allowed on AWD vehicles. For AWD vehicles that did not
come with any type of LSD (including center diff or transfer case), a single aftermarket mechanical LSD may be added.
2WD vehicles may use any mechanical LSD unit
* Radiators may be replaced with the following restrictions
  * Radiator core dimensions may not be smaller than the standard part
  * Radiator must mount to OE radiator mounts
  * Fluid capacity and dry weight of the radiator must be no less than the standard part
  * Installation of an alternate radiator may serve no other purpose

### Street Prepared
