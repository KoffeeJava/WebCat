/*
    This is a Nightly Version and is not made to be used for regular projects but instead for testing.
    Please get the extension via the releases or the discord server, https://discord.gg/JpEQJkyRgX
    
    MIT License

    Copyright (c) 2025 KoffeeJava

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        alert('This Extension must run unsandboxed');
    }

    // Listing icons
    var cat = 'data:image/png;base64,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
    var notif = 'data:image/png;base64,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'
    var tab = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA6CAYAAAAA0F95AAAACXBIWXMAAAsSAAALEgHS3X78AAAB6UlEQVRo3uWaO04DMRCGx0kA8apQhJDoOAAd4gCIgpaGDipaykjcIEKiQuICcAAKDkGHUCpER4OoKBBvMhmUJVpC1tmH7bE9I/3VKvJ+v/+xHScAflWbhClNgaDCDB1IgD/RGCDCBMwhKyYojwxged9agElpSW2BtFrSDYjOBJRuAko3AaWbgFwmhHYOMM5Tg7gquHaYI+0YagHvvzvsWQD13oRjx9DemPDFDM6yRa57BO08CRiArCThPBB4KyYcBQZvtB0+AoX/l4R6QfBF0nOJz/lWG6Qn0lWRs/Mq6Tqyo/NSXgNWSHcx3sXlMWAi6XmQagBCxKUkw1Od6gxYJt1HboBSgmdf6W6EHiXA69YAlACfZYAY+FEtcBspOGalXQmYfdSsdX8etKXBDycAJfT8uDVA2jF/YMAuwwu+Qf/afJMLfrhXbGvfwfjdKouFDR06HL9bJTKmwdccj18avkHaNth700lve7XVjauOgRm4NADhPPa/q2XV/X8e+jfFVQ1wPvMmzgFbBuC53n2wBpStGdKrz4ccmwZMkj4ZwH96vs4do4VY4MskwNa/yl6SlnIKXzQBTYuzO6t59g2Wf4vMs992HES8MWLcGxerKTJGn73ytMAFRF4PY+IvorLgmyCozlLg71Kge4cVqVchPJOFAAAAAElFTkSuQmCC'
    var store = 'data:image/png;base64,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'
    var inter = 'data:image/png;base64,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'
    var js = 'data:image/png;base64,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'
    var notify = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAA0CAYAAACDzrhBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABR0lEQVRIieXWMUoDQRjF8V82AUVFtLOyUxsLu3Ri5REsbQQ7EbyApQfQC4iNl9BChFzASjtFtDIplCgEY5FsSOImZGfEgH4wsAy8/773zTfsFrCLA2FVKaGIlUDATYKXQDHUYgHVBNVYwPgd1PAZA2i2IcEAwmPUUkBoI6MdVGMcvKIRA6hCTIQewFgc1H7UwT9tYg+gjvcYAPljfAPkjdEzB2NxENWDOj5iAB23oREyAb/qoPMZKHVtVrA3IuA2x8v+fBUy9uawjU0saTX6EVc4xd0w4I7WcTYHrAZOMJklPhoi7F/XmO4Wb+UQp+ssFZdwHwBoolzEhtEnsL+aCdYCxVBOMBUBmE3wEAF4TnAh/DfvMn04l/8E6lhMAQt4ygnY77ezarR5+MThoEzzOMbbAHFFa246lXUbYQbrWMZEO15Fxk38Akx/qscGoX2ZAAAAAElFTkSuQmCC'
    
    const vm = Scratch.vm;
    class WebCat {
        getInfo() {
            return {
                id: 'KoffeeJavaWebCat',
                name: 'WebCat',
                blockIconURI: cat,
                color1: '#dfa06cff',
                color2: '#543118',
                blocks: [
                    {
                        opcode: 'NOTIFYALLOW',
                        blockType: Scratch.BlockType.BOOLEAN,
                        blockIconURI: notif,
                        text: 'Is notifications allowed?',
                        disableMonitor: true
                    },
                    {
                        opcode: 'REQUEST',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Request Permisission',
                        blockIconURI: notif,
                        disableMonitor: true
                    },
                    {
                        opcode: 'NOTIFY',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Notify; Icon [ICO] Title [TITLE] Message [MESS]',
                        disableMonitor: true,
                        blockIconURI: notify,
                        arguments: {
                            ICO: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://tinyurl.com/util-tux'
                            },
                            TITLE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Tuxtility'
                            },
                            MESS: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello :)'
                            }

                        }
                    },
                    {
                        opcode: 'POPUP',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Open Pop Up [LINK] Width [WID] Height [HIE]',
                        blockIconURI: tab,
                        arguments: {
                            LINK: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com/'
                            },
                            WID: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 900
                            },
                            HIE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 900
                            }
                        }
                    },
                    {
                        opcode: 'NEXT',
                        blockType: Scratch.BlockType.COMMAND,
                        blockIconURI: inter,
                        text: 'Go Forward',
                        disableMonitor: true
                    },
                    {
                        opcode: 'BACK',
                        blockType: Scratch.BlockType.COMMAND,
                        blockIconURI: inter,
                        text: 'Go Back',
                        disableMonitor: true
                    },
                    {
                        opcode: 'ISON',
                        blockType: Scratch.BlockType.BOOLEAN,
                        blockIconURI: inter,
                        text: "Is User Online?",
                        disableMonitor: true,
                    },
                    {
                        opcode: 'TABINFO',
                        blockType: Scratch.BlockType.LABEL,
                        text: 'Tab Info',
                    },
                    {
                        opcode: 'CTT',
                        blockType: Scratch.BlockType.COMMAND,
                        blockIconURI: inter,
                        text: 'Change title to [TEXT]',
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Webcat!'
                            }
                        }
                    },
                    {
                        opcode: 'FAVI',
                        blockType: Scratch.BlockType.COMMAND,
                        blockIconURI: inter,
                        text: "Set favicon to [FAVI]",
                        disableMonitor: true,
                        arguments: {
                            FAVI: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://i.ibb.co/0pGGjTBX/webcat.png'
                            }
                        }
                    },
                    {
                        opcode: 'CURTITLE',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        text: 'Current Title',
                        disableMonitor: true
                    },
                    {
                        opcode: 'WHATOS',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        text: "User's OS",
                        disableMonitor: true
                    },
                    {
                        opcode: 'WHATWEB',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        text: "User's Web Browser",
                        disableMonitor: true
                    },
                    {
                        opcode: 'LANG',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        disableMonitor: true,
                        text: "Browser's Language"
                    }
                ],
            };
        }
        NOTIFYALLOW() {
            if (Notification.permission === "denied") {
                return false;
            }
            if (Notification.permission === "granted") {
                return true;
            }
            if (Notification.permission === "default") {
                return false;
            }
        }
        REQUEST() {
            Notification.requestPermission().then(function (permission) { });
        }
        NOTIFY(args) {
            let title = args.TITLE
            let icon = args.ICO
            let body = args.MESS
            var notification = new Notification(title, { body, icon });
        }
        POPUP(args) {
            Scratch.openWindow(args.LINK, `width=${args.WID},height=${args.HIE}`);
        }
        JS(args) {
            var conf = confirm(`This site wants to execute javascript code.\n This can allow dangrous code to run on your browser.\n code: ${args.TEXT}\n Allow?`)
            if (conf == true){
                eval(args.TEXT);
            }
        }
        NEXT() {
            history.forward();
        }
        BACK() {
            history.back()
        }
        CTT(args) {
            document.title = args.TEXT
        }
        FAVI(args) {
            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = args.FAVI;

        }
        CURTITLE() {
            return document.title;
        }
        WHATOS() {
            var conf = confirm("This site wants to view what OS you are using.\nAllow?")
            if (conf == true){
                return window.navigator.platform
            }
            if (conf == false){
                return "Blocked"
            }
        }
        WHATWEB() {
            var conf = confirm("This site wants to view what browser you are using.\nAllow?")
            if(conf == true){
                return (/firefox|chrome|safari|opera|edg|msie|trident/i.exec(navigator.userAgent) || ["unknown"])[0].toLowerCase();
            }
            if (conf == false){
                return "Blocked"
            }
        }
        ISON() {
            return navigator.onLine
        }
        LANG() {
            var conf = confirm("This site wants to view what browser language you are using.\nAllow?")
            if (conf == true) {
                return navigator.language;
            }
            if (conf == false) {
                return "Blocked"
            }
        }
        LOGTX(args) {
            if (args.LOGTX === 'Log') {
                console.log(args.TEXT)
            }
            if (args.LOGTX === 'Warn') {
                console.warn(args.TEXT)
            }
            if (args.LOGTX === 'Error') {
                console.error(args.TEXT)
            }
        }
        ENCODEURI(args) {
            var encodedString = btoa(args.TEXT);
            var uri = "data:/application/octet-stream;base64," + encodedString
            return uri
        }
        ENCODEHEX(args) {
            let originalString = args.TEXT
            let hexString = '';
            for (let i = 0; i < originalString.length; i++) {
            hexString += originalString.charCodeAt(i).toString(16);
            }

            return hexString
        }
    }
    Scratch.extensions.register(new WebCat());
})(Scratch);
