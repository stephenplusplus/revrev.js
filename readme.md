##revrev-erse your text!
- - -
revrev.js is a mostly pointless jQuery plugin that lets you style your text in some cool ways. like, you can flip the letters horizontally so that they rev-rev-reverse. and there are other things, too... random caps, random spacing, random colors, random heights!

    <p data-revrev="string"
       data-revrev-cray="10"
       data-revrev-clrz="red, #111, teal, purple"
       data-revrev-also="colorize"
    >all of this text gets owned by revrev!</p>

##see it!
- - -
see it in action [here](http://spsawchuk.github.com/revrev.js).

##here'r'ur options.
- - -
apply these data attributes to start the revrev engine.

####data-revrev="string"
    just 'string' for now. more to come later. this will tell revrev what to revrev.

####data-revrev-cray="##" (optional)
    0-100. this will tell revrev how much reversing to do.
    perhaps you just want to use revrev for one of the other functions. up to you!

####data-revrev-clrz="#hex, colorname" (optional)
    ** only if you plan to colorize your text. **
    comma-separated color codes/names you want your text to apply randomly.

####data-revrev-also="colorize, updown, squish, cap" (optional)
    coloriz: randomly sorts through colors you set in "data-revrev-clrz"
    *updown ( .revrevupdown ): sets a "bumpy" effect to your text.
    *squish ( .revrevsquish ): randomly applies narrower letter-spacing.
    *cap ( .revrevcap ): SeTs raNDom caPs.
    * strength of effect customizable with css.