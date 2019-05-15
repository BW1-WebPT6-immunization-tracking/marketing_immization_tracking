# marketing_immization_tracking
Immunization Tracking Marketing Page for WebPT6

Pitch: As a parent, it's hard to keep track of your child's immunization records! Especially if you move states, or switch doctors.  It's a pain to call around and figure out which immunizations your child still needs, or to have them mail you proof for things like school registration.  As an adult, it's even harder to access these records for travel that requires immunizations or booster shots. This app allows medical professionals to upload immunization records to your personal or family account.

Design inspiration links
- https://html5up.net/editorial
- https://html5up.net/stellar
- https://html5up.net/prologue


DOCUMENTATION

COMPONENTS

--RESPONSIVENESS--
Inspired by Bootstrap, there are classes created for responsive design.

.mobile-only, .tablet-only, .desktop-only 
All hide the other 2 views

.row
Holds "boxes", automatically has flex properties

.box-1, .box-2, .box-3... .box-12
There are 12 'columns' in a row, and each box can be any whole number from one to 12.

.box-mobile-6, .box-tablet-8, .box-desktop-10
There are 3 more sets of 12 classes for controlling the size on each screen 

EXAMPLE:
This will have 4 lines on mobile, 2 lines of 2 on tablet, and one line of 4 on desktop
<-div class="row">
    <-div class=".box-12-mobile .box-6-tablet .box-3-desktop">
    <-/div>
    
    <-div class=".box-12-mobile .box-6-tablet .box-3-desktop">
    <-/div>
    
    <-div class=".box-12-mobile .box-6-tablet .box-3-desktop">
    <-/div>
    
    <-div class=".box-12-mobile .box-6-tablet .box-3-desktop">
    <-/div>
<-/div>