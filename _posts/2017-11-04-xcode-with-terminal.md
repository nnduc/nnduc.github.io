---
layout: post
title:  "Quick open Xcode project location in Terminal/iTerm"
date:   2017-11-04 21:15:00 +0700
---



Every iOS Developer often has to deal with things that need to be done via Terminal:

- work with [git](https://git-scm.com/)*;*
- upload a build for customers via [fastlane](https://github.com/fastlane/fastlane);
- update dependencies via [Carthage](https://github.com/Carthage/Carthage), [Cocoapods](https://cocoapods.org/) or [SPM](https://swift.org/package-manager/#example-usage) and so on.

Lately I’ve often had to switch between different Xcode projects and every time I had to change a path to a specific project in terminal. I am so tired of it! I want to have the opportunity to open Terminal right from Xcode with an already specifed path. 🤔 If you feel the same then continue reading!



**First**, we need to create a script with the following body:

```bash
#!/bin/sh
if [ -n "$XcodeProjectPath" ]; then	
  open -a Terminal "$XcodeProjectPath"/..
  # open -a iTerm "$XcodeProjectPath"/..
else		
  open -a Terminal "$XcodeWorkspacePath"/..
  # open -a Terminal "$XcodeWorkspacePath"/..
fi
```

It opens either `.xcodeproj` or `.xcworkspace`.

After that don’t forget to make this script as an executable by the special command: `chmod +x <your_script.sh>` (you can check more about this command [here](https://www.freebsd.org/cgi/man.cgi?query=chmod&sektion=1)) and save it to some directory wherever you want (in my case it’s a user directory).

> If you prefer iTerm, just change the Terminal keyword to iTerm in this script.

**The next one **is creating a custom Xcode’s behavior. Open Xcode and follow the next steps: *Xcode menu > Behaviors > Edit Behaviors…* Then at the bottom of the popup appeared press the `+` button.

![img](https://cdn-images-1.medium.com/max/800/1*h1varg_xpmH1DC8yTiKcTA.png)

Choose a recognizable name for this behaviour, setup a shortcut, select the`Run` checkbox and select the previously configured script. You only need to configure it once and it’ll work for all your projects. 🎉


Thanks for reading! I hope you’ve enjoyed my Terminal optimization tip. 

Source: Nikita Ermolenko