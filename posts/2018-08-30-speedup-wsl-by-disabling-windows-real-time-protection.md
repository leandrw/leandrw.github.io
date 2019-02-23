---
id: 886
title: Speedup WSL by disabling Windows Real-time protection
date: 2018-08-30T00:01:54+00:00
author: leandrw
layout: post-en
guid: https://leandrw.com.br/?p=886
permalink: /speedup-wsl-by-disabling-windows-real-time-protection/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";N;s:2:"id";N;s:21:"follower_notification";N;s:7:"license";N;s:14:"publication_id";N;s:6:"status";N;s:3:"url";N;}'
image: /wp-content/uploads/2018/08/1-Cb8wWHPg6h_bgN8P7cnULg-618x430.jpeg
categories:
  - Sem categoria
tags:
  - Antivirus
  - AV
  - Disable Antivirus
  - Linux
  - Real-time protection
  - Security
  - Windows
  - WSL
---
In this short tutorial, I will help you speedup Windows Subsystem for Linux (WSL) by disabling Windows Real-time protection.

While being helpful detecting some common Windows malwares, in GNU/Linux side it’s so inefficient and actually unhelpful.

Every time you try to access/read/write some file/folder, Windows Defender intercept WSL requisition for antivirus scanning, slowing down things until you hate everything in WSL!

[caption id="attachment_887" align="alignnone" width="960"]<img class="wp-image-887 size-full" src="https://leandrw.com.br/wp-content/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA.png" alt="Screenshot of Windows Subsystem for Linux executing apt-get update downloading slow at 46.6 kB/s" width="960" height="480" /> Ubuntu running inside WSL trying to update some packages behind Windows Real-time protection bad guy[/caption]

<em><strong>Warning</strong>: disabling Real-time Security may have some direct impact in yours personal security</em>. Know what you are doing.

<!--more-->
<h1>Adding WSL in the Windows Security's Exclusion List</h1>
So, first get the UbuntuOnLinux (or your distro of choice) installation path going to <em>%USERPROFILE%\AppData\Local\Packages</em> and lookup for something like <em>CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc</em>.

Copy the entire path from <em>Explorer.exe</em> address bar, then go to:

Settings &gt; Update &amp; Security &gt; Windows Defender &gt; Open Windows Defender Secutiry Central &gt; Protection Against Viruses &amp; Threats &gt; Advanced Config… &gt; Exclusions &gt; Add or Remove &gt; Add &gt; Folder and finally: paste the previous copied path.
<h1>High security sometimes means Low performance</h1>
[caption id="attachment_888" align="alignnone" width="618"]<img class="wp-image-888 size-full" src="https://leandrw.com.br/wp-content/uploads/2018/08/1-Cb8wWHPg6h_bgN8P7cnULg.jpeg" alt="Screenshot of Windows Defender Security Center showing Real-time protection as disabled" width="618" height="594" /> Windows Defender Real-time slow down… protection[/caption]

Adding WSL to exclusion list may speedup things a little bit, but not so. There is one more thing bringing your performance down: Window Defender real-time protection.

As noticed by <a href="https://github.com/tanseydavid" target="_blank" rel="noopener">David Tansey</a> in this <a href="https://github.com/Microsoft/WSL/issues/1932" target="_blank" rel="noopener">WSL issue</a>, real-time protection have a HUGE impact in developer tools like Visual Studio build tool and tools like Kubernetes and etc., including WSL.

We will disable it, but be aware: you will may be more vulnerable for some common attacks through malicious script execution.

So, let’s disable:
<h2>Using Group Policy (gpedit.exe) to disable real-time protection:</h2>
[caption id="attachment_889" align="alignnone" width="800"]<img class="wp-image-889 size-full" src="https://leandrw.com.br/wp-content/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg.png" alt="Screenshot of Group Policy Editor (a.k.a. gpedit.msc)" width="800" height="426" /> Using Group Policy (gpedit.msc) to disable real-time protection[/caption]
<ol>
 	<li>On your Group Policy management machine, open the Group Policy Management Console, right-click the Group Policy Object you want to configure and click Edit.</li>
 	<li>In the Group Policy Management Editor go to Computer configuration.</li>
 	<li>Click Policies then Administrative templates.</li>
 	<li>Expand the tree to Windows components &gt; Windows Defender Antivirus &gt; Real-time protection.</li>
 	<li>Double-click the Turn off real-time protection setting and set the option to Enabled. Click OK.</li>
</ol>
I’ve only tested superficially, but I can ensure a great performance speed up.
<blockquote><em class="markup--em markup--p-em">Disclaimer: I have plans to improve my English skill, but my willing to help is bigger than that.</em></blockquote>
<h1>References:</h1>
Configure always-on real-time protection in Windows Defender AV | Microsoft Docs — <a href="https://docs.microsoft.com/en-us/windows/threat-protection/windows-defender-antivirus/configure-real-time-protection-windows-defender-antivirus" target="_blank" rel="noopener">https://docs.microsoft.com/en-us/windows/threat-protection/windows-defender-antivirus/configure-real-time-protection-windows-defender-antivirus</a>

First posted on Medium <a href="https://medium.com/@leandrw/speeding-up-wsl-i-o-up-than-5x-fast-saving-a-lot-of-battery-life-cpu-usage-c3537dd03c74" target="_blank" rel="noopener">Speeding up WSL I/O up than 5x fast + saving a lot of battery life &amp; CPU usage</a>, as a reply to <a href="https://medium.com/@johnwoodruff91/epic-dev-environment-with-wsl-dc81e234ae61" target="_blank" rel="noopener">Epic Development Environment using Windows Subsystem for Linux</a>
