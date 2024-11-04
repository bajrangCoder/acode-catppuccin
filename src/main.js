import plugin from "../plugin.json";
import style from "./style.scss";

const themes = acode.require("themes");
const ThemeBuilder = acode.require("themeBuilder");
const settings = acode.require("settings");

const { editor } = editorManager;
const FLAVORS = ['latte', 'frappe', 'macchiato', 'mocha'];
const THEME_PREFIX = 'catppuccin';

// theme definition for each flavor
FLAVORS.forEach(flavor => {
    const themeName = `${THEME_PREFIX}-${flavor}`;

    // CSS module
    ace.define(`ace/theme/${themeName}.css`, ["require", "exports", "module"], function (require, exports, module) {
        module.exports = style;
    });

    // theme module
    ace.define(`ace/theme/${themeName}`, ["require", "exports", "module", `ace/theme/${themeName}.css`, "ace/lib/dom"],
        function (require, exports, module) {
            exports.isDark = flavor !== 'latte'; // latte is light theme, others are dark
            exports.cssClass = `ace-${themeName}`;
            exports.cssText = require(`./${themeName}.css`);
            const dom = require("../lib/dom");
            dom.importCssString(exports.cssText, exports.cssClass, false);
        }
    );
    // Require the theme
    (function () {
        window.require([`ace/theme/${themeName}`], function (m) {
            if (typeof module == "object" && typeof exports == "object" && module) {
                module.exports = m;
            }
        });
    })();
});

class AcodePlugin {
    async init() {
        try {
            const customStyles = document.createElement("style");
            customStyles.textContent = `
                .open-file-list li.tile.active {
                    border: none;
                    border-top: 2px solid var(--active-color);
                }
                .open-file-list li.tile.notice:before {
                    content: '•';
                    color: var(--active-color);
                    font-size: 1.5em;
                    margin-left: 2.5px;
                    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
                }
            `;
            document.head.append(customStyles);
            themes.add(this.latteAppTheme());
            themes.add(this.frappeAppTheme());
            themes.add(this.macchiatoAppTheme());
            themes.add(this.mochaAppTheme());

            const themeList = ace.require("ace/ext/themelist").themes;

            FLAVORS.forEach(flavor => {
                const themeName = `${THEME_PREFIX}-${flavor}`;
                themeList.push({
                    caption: `Catppuccin ${flavor[0].toUpperCase() + flavor.slice(1)}`,
                    theme: `ace/theme/${themeName}`,
                    isDark: flavor !== 'latte'
                });
            });

            // Check if any Catppuccin theme is currently active
            const currentTheme = settings.get("editorTheme");
            if (currentTheme.startsWith(THEME_PREFIX)) {
                editor.setTheme(`ace/theme/${currentTheme}`);
            }

            settings.on("update", this.onThemeChange.bind(this));
        } catch (error) {
            console.error(error)
            acode.alert("Warning", "Please restart acode");
        }
    }
    latteAppTheme() {
        const latte = new ThemeBuilder('Catppuccin Latte 🌻', 'light', 'free');
        latte.popupBorderRadius = "8px";
        latte.activeColor = "#1e66f5"; // blue
        latte.activeIconColor = "#8c8fa1"; // Overlay1
        latte.borderColor = "#ccd0da"; // Surface0
        latte.buttonActiveColor = "#acb0be"; // Surface2
        latte.buttonBackgroundColor = "#bcc0cc"; // Surface1
        latte.buttonTextColor = "#5c5f77"; // Subtext1
        latte.errorTextColor = "#d20f39"; // Red
        latte.primaryColor = "#dce0e8"; // Crust
        latte.darkenedPrimaryColor = "#dce0e8"; // Crust
        latte.primaryTextColor = "#4c4f69"; // Text
        latte.secondaryColor = "#eff1f5"; // Base
        latte.secondaryTextColor = "#4c4f69"; // Text
        latte.linkTextColor = "#1e66f5"; // Blue
        latte.scrollbarColor = "#8839ef33";
        latte.popupBorderColor = "#ccd0da"; // Surface0
        latte.popupIconColor = "#5c5f77"; // Subtext1
        latte.popupBackgroundColor = "#dce0e8"; // Crust
        latte.popupTextColor = "#7c7f93"; // Overlay2
        latte.popupActiveColor = "#ccd0da"; // Surface0
        latte.dangerColor = "#fe640b"; // Peach
        latte.preferredEditorTheme = "catppuccin-latte";
        latte.fileTabWidth = "135px";
        console.log(latte.toJSON("hex"))
        return latte;
    }
    frappeAppTheme() {
        const frappe = new ThemeBuilder('Catppuccin Frappé 🪴', 'dark', 'free');
        frappe.popupBorderRadius = "8px";
        frappe.activeColor = "#8caaee"; // blue
        frappe.activeIconColor = "#838ba7"; // Overlay1
        frappe.borderColor = "#414559"; // Surface0
        frappe.buttonActiveColor = "#626880"; // Surface2
        frappe.buttonBackgroundColor = "#51576d"; // Surface1
        frappe.buttonTextColor = "#b5bfe2"; // Subtext1
        frappe.errorTextColor = "#e78284"; // Red
        frappe.primaryColor = "#232634"; // Crust
        frappe.darkenedPrimaryColor = "#232634"; // Crust
        frappe.primaryTextColor = "#c6d0f5"; // Text
        frappe.secondaryColor = "#303446"; // Base
        frappe.secondaryTextColor = "#c6d0f5"; // Text
        frappe.linkTextColor = "#8caaee"; // Blue
        frappe.scrollbarColor = "#ca9ee633";
        frappe.popupBorderColor = "#414559"; // Surface0
        frappe.popupIconColor = "#b5bfe2"; // Subtext1
        frappe.popupBackgroundColor = "#232634"; // Crust
        frappe.popupTextColor = "#949cbb"; // Overlay2
        frappe.popupActiveColor = "#414559"; // Surface0
        frappe.dangerColor = "#ef9f76"; // Peach
        frappe.preferredEditorTheme = "catppuccin-frappe";
        frappe.fileTabWidth = "135px";
        console.log(frappe.toJSON("hex"))
        return frappe;
    }
    macchiatoAppTheme() {
        const macchiato = new ThemeBuilder('Catppuccin Macchiato 🌺', 'dark', 'free');
        macchiato.popupBorderRadius = "8px";
        macchiato.activeColor = "#8aadf4"; // blue
        macchiato.activeIconColor = "#8087a2"; // Overlay1
        macchiato.borderColor = "#363a4f"; // Surface0
        macchiato.buttonActiveColor = "#5b6078"; // Surface2
        macchiato.buttonBackgroundColor = "#494d64"; // Surface1
        macchiato.buttonTextColor = "#b8c0e0"; // Subtext1
        macchiato.errorTextColor = "#ed8796"; // Red
        macchiato.primaryColor = "#181926"; // Crust
        macchiato.darkenedPrimaryColor = "#181926"; // Crust
        macchiato.primaryTextColor = "#cad3f5"; // Text
        macchiato.secondaryColor = "#1e1e2e"; // Base
        macchiato.secondaryTextColor = "#cad3f5"; // Text
        macchiato.linkTextColor = "#8aadf4"; // Blue
        macchiato.scrollbarColor = "#c6a0f633";
        macchiato.popupBorderColor = "#363a4f"; // Surface0
        macchiato.popupIconColor = "#b8c0e0"; // Subtext1
        macchiato.popupBackgroundColor = "#181926"; // Crust
        macchiato.popupTextColor = "#939ab7"; // Overlay2
        macchiato.popupActiveColor = "#363a4f"; // Surface0
        macchiato.dangerColor = "#f5a97f"; // Peach
        macchiato.preferredEditorTheme = "catppuccin-macchiato";
        macchiato.fileTabWidth = "135px";
        console.log(macchiato.toJSON("hex"))
        return macchiato;
    }
    mochaAppTheme() {
        const mocha = new ThemeBuilder('Catppuccin Mocha 🌿', 'dark', 'free');
        mocha.popupBorderRadius = "8px";
        mocha.activeColor = "#89b4fa";
        mocha.activeIconColor = "#7f849c";
        mocha.borderColor = "#313244";
        // mocha.boxShadowColor = "#4c4f69";
        mocha.buttonActiveColor = "#585b70";
        mocha.buttonBackgroundColor = "#45475a";
        mocha.buttonTextColor = "#bac2de";
        mocha.errorTextColor = "#f38ba8";
        mocha.primaryColor = "#11111b";
        mocha.darkenedPrimaryColor = "#11111b";
        mocha.primaryTextColor = "#cdd6f4";
        mocha.secondaryColor = "#1e1e2e";
        mocha.secondaryTextColor = "#cdd6f4";
        mocha.linkTextColor = "#89b4fa";
        mocha.scrollbarColor = "#cba6f733";
        mocha.popupBorderColor = "#313244";
        mocha.popupIconColor = "#bac2de";
        mocha.popupBackgroundColor = "#11111b";
        mocha.popupTextColor = "#9399b2";
        mocha.popupActiveColor = "#313244";
        mocha.dangerColor = "#fab387";
        mocha.preferredEditorTheme = "catppuccin-mocha";
        mocha.fileTabWidth = "135px";
        console.log(mocha.toJSON("hex"))
        return mocha;
    }
    onThemeChange(value) {
        const themeName = value.replace('ace/theme/', '');
        if (value.includes(THEME_PREFIX)) {
            editor.setTheme(`ace/theme/${themeName}`);
            settings.update({ editorTheme: themeName });
        }
    }

    async destroy() {
        settings.off("update", this.onThemeChange);
    }
}

if (window.acode) {
    const acodePlugin = new AcodePlugin();
    acode.setPluginInit(
        plugin.id,
        async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            acodePlugin.baseUrl = baseUrl;
            await acodePlugin.init($page, cacheFile, cacheFileUrl);
        },
        acodePlugin.settingsObj
    );
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}