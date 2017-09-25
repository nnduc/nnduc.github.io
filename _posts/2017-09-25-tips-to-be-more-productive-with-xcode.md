---
layout: post
title:  "Tips to be more productive with Xcode"
date:   2017-09-25 07:02:34 +0700
---

<br>`⌃`: Control
<br>`⌘`: Command
<br>`⌥`: Option
<br>`⇧`: Shift
<br>`⏎`: Return

### 1. Decide Where to Open a File
In Xcode, you can open a file in various ways: in the standard editor, in a new or existing assistant editor, in a new or existing tab, or in a new window. Here's how you can decide about this:

When clicking on a file in the Navigator, hold down `⇧` + `⌥`
<br>When clicking on a symbol in an editor pane, hold down `⇧` + `⌥` + `⌘`
<br>A pop-over will appear and let you choose where exactly you want this file to be displayed:

![]({{site.baseurl}}/images/xcode-open-file.gif)

### 2. Moving a full line or many lines of code up or down

`⌘` + `⌥` + `{`: move up

`⌘` + `⌥` + `}`: move down

> If you have text selected, Xcode will move each line containing your selection; otherwise, it’ll move the line the cursor is in.

<br><br>
Source:
- [git-tower][git-tower]

[git-tower]: https://www.git-tower.com/blog/6-tips-for-xcode/
