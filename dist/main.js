"use strict";(()=>{var m=(a,c)=>()=>(a&&(c=a(a=0)),c);var k=(a,c)=>()=>(c||a((c={exports:{}}).exports,c),c.exports);var u,b=m(()=>{u={id:"acode.catppuccin",name:"Catppuccin",main:"dist/main.js",version:"1.0.3",readme:"readme.md",icon:"icon.png",files:[],minVersionCode:290,license:"MIT",keywords:["catppuccin","theme","ace"],changelogs:"changelogs.md",author:{name:"Raunak Raj",email:"bajrangcoders@gmail.com",github:"bajrangCoder"}}});var s,g=m(()=>{"use strict";s=`.ace-catppuccin-latte {
  color: #4c4f69;
  background-color: #eff1f5;
  /**
  * keywords
  * for example if else 
  * ID in css
  */
  /**
  * Don't change indent guide 
  */
  /**
   * All the highlight rules bellow require extra syntax highlight plugin
  **/
}
.ace-catppuccin-latte .ace_gutter {
  color: #7c7f93;
}
.ace-catppuccin-latte .ace_gutter-active-line {
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-top: 1px solid rgba(114, 135, 253, 0.07);
  border-bottom: 1px solid rgba(114, 135, 253, 0.07);
  color: #7287fd;
  background: rgba(76, 79, 105, 0.07);
}
.ace-catppuccin-latte .ace_print-margin {
  width: 1px;
  background: #5c5f77;
}
.ace-catppuccin-latte .ace_cursor {
  color: #dc8a78;
}
.ace-catppuccin-latte .ace_marker-layer .ace_selection {
  background: rgba(140, 143, 161, 0.4);
  border-radius: 0;
}
.ace-catppuccin-latte .ace_meta.ace_selector {
  color: #8839ef;
}
.ace-catppuccin-latte .ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px black;
}
.ace-catppuccin-latte .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}
.ace-catppuccin-latte .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(124, 127, 147, 0.5);
}
.ace-catppuccin-latte .ace_marker-layer .ace_active-line {
  background: rgba(76, 79, 105, 0.07);
  border-top: 1px solid rgba(114, 135, 253, 0.07);
  border-bottom: 1px solid rgba(114, 135, 253, 0.07);
  box-sizing: border-box;
}
.ace-catppuccin-latte .ace_marker-layer .ace_selected-word {
  background-color: rgba(23, 146, 153, 0.3);
  color: #e6e9ef;
}
.ace-catppuccin-latte .ace_invisible {
  color: rgba(124, 127, 147, 0.4);
}
.ace-catppuccin-latte .hljs-keyword,
.ace-catppuccin-latte .ace_keyword {
  color: #8839ef;
  font-style: italic;
}
.ace-catppuccin-latte .ace_keyword.ace_operator {
  color: #04a5e5;
  font-style: bold;
}
.ace-catppuccin-latte .ace_constant.ace_language {
  color: #fe640b;
}
.ace-catppuccin-latte .ace_constant.ace_numeric {
  color: #fe640b;
}
.ace-catppuccin-latte .ace_constant.ace_character {
  color: #fe640b;
}
.ace-catppuccin-latte .ace_constant.ace_character.ace_escape {
  color: #ea76cb;
}
.ace-catppuccin-latte .ace_constant.ace_other {
  color: #ea76cb;
}
.ace-catppuccin-latte .hljs-title,
.ace-catppuccin-latte .ace_identifier {
  color: #4c4f69;
}
.ace-catppuccin-latte .ace_support.ace_function {
  color: #1e66f5;
}
.ace-catppuccin-latte .ace_support.ace_function.ace_dom {
  color: #e64553;
}
.ace-catppuccin-latte .ace_support.ace_constant {
  color: #7287fd;
}
.ace-catppuccin-latte .ace_class {
  color: #df8e1d;
}
.ace-catppuccin-latte .ace_variable.ace_language {
  color: #dc8a78;
}
.ace-catppuccin-latte .ace_support.ace_type {
  color: #dd7878;
  font-style: italic;
}
.ace-catppuccin-latte .ace_meta.ace_tag {
  color: #8839ef;
}
.ace-catppuccin-latte .ace_storage,
.ace-catppuccin-latte .ace_storage.ace_type {
  color: #d20f39;
}
.ace-catppuccin-latte .ace_storage.ace_type.ace_variable.ace_ts {
  color: #df8e1d;
}
.ace-catppuccin-latte .ace_constant.ace_buildin {
  color: #d20f39;
}
.ace-catppuccin-latte .ace_fold {
  background-color: #ccd0da;
  border-color: #bcc0cc;
}
.ace-catppuccin-latte .ace_invalid {
  color: #4c4f69;
  background-color: #d20f39;
}
.ace-catppuccin-latte .ace_invalid.ace_deprecated {
  color: #4c4f69;
  background-color: #8839ef;
}
.ace-catppuccin-latte .ace_string {
  color: #40a02b;
}
.ace-catppuccin-latte .ace_comment {
  color: #7c7f93;
  font-style: italic;
}
.ace-catppuccin-latte .ace_variable {
  color: #04a5e5;
}
.ace-catppuccin-latte .ace_constant {
  color: #fe640b;
}
.ace-catppuccin-latte .hljs-params,
.ace-catppuccin-latte .ace_variable.ace_parameter {
  color: #e64553;
  font-style: italic;
}
.ace-catppuccin-latte .ace_entity.ace_other.ace_attribute-name {
  color: #df8e1d;
}
.ace-catppuccin-latte .ace_xml-pe.ace_xml,
.ace-catppuccin-latte .ace_punctuation.ace_tag {
  color: #7c7f93;
}
.ace-catppuccin-latte .ace_tag-name.ace_tag,
.ace-catppuccin-latte .ace_entity.ace_name.ace_tag {
  color: #8839ef;
}
.ace-catppuccin-latte .ace_paren {
  color: #7c7f93;
}
.ace-catppuccin-latte .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-latte .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-latte .ace_support.ace_constant.ace_js {
  color: #179299;
}
.ace-catppuccin-latte .ace_entity.ace_name.ace_function {
  color: #1e66f5;
}
.ace-catppuccin-latte .ace_tooltip {
  background-color: #ccd0da !important;
  color: #4c4f69 !important;
}
.ace-catppuccin-latte .ace_icon_svg.ace_error,
.ace-catppuccin-latte .ace_icon_svg.ace_error_fold {
  background-color: #d20f39;
}
.ace-catppuccin-latte .ace_icon_svg.ace_security,
.ace-catppuccin-latte .ace_icon_svg.ace_security_fold {
  background-color: #d20f39;
}
.ace-catppuccin-latte .ace_icon_svg.ace_warning,
.ace-catppuccin-latte .ace_icon_svg.ace_warning_fold {
  background-color: #df8e1d;
}
.ace-catppuccin-latte .ace_icon_svg.ace_info {
  background-color: #04a5e5;
}
.ace-catppuccin-latte .ace_icon_svg.ace_hint {
  background-color: #04a5e5;
}
.ace-catppuccin-latte .ace_highlight-marker {
  background: none;
  border: #04a5e5 1px solid;
}
.ace-catppuccin-latte .ace_tooltip.ace_hover-tooltip:focus > div {
  outline: 1px solid #04a5e5;
}
.ace-catppuccin-latte .ace_snippet-marker {
  background-color: #ccd0da;
  border: 0;
}
.ace-catppuccin-latte .ace_support.ace_constant.ace_css-in-js {
  color: #fe640b;
}
.ace-catppuccin-latte .ace_editor.ace_autocomplete .ace_line-hover {
  border: 1px solid #04a5e5 !important;
  background: #7c7f93 !important;
}
.ace-catppuccin-latte .ace_editor.ace_autocomplete .ace_completion-meta {
  color: #7c7f93 !important;
  opacity: 1;
}
.ace-catppuccin-latte .ace_tooltip-marker-error.ace_tooltip-marker {
  background-color: #d20f39 !important;
}
.ace-catppuccin-latte .ace_tooltip-marker-security.ace_tooltip-marker {
  background-color: #d20f39 !important;
}
.ace-catppuccin-latte .ace_tooltip-marker-warning.ace_tooltip-marker {
  background-color: #df8e1d !important;
}

.ace-catppuccin-frappe {
  color: #c6d0f5;
  background-color: #303446;
  /**
  * keywords
  * for example if else 
  * ID in css
  */
  /**
  * Don't change indent guide 
  */
  /**
   * All the highlight rules bellow require extra syntax highlight plugin
  **/
}
.ace-catppuccin-frappe .ace_gutter {
  color: #949cbb;
}
.ace-catppuccin-frappe .ace_gutter-active-line {
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-top: 1px solid rgba(186, 187, 241, 0.07);
  border-bottom: 1px solid rgba(186, 187, 241, 0.07);
  color: #babbf1;
  background: rgba(198, 208, 245, 0.07);
}
.ace-catppuccin-frappe .ace_print-margin {
  width: 1px;
  background: #b5bfe2;
}
.ace-catppuccin-frappe .ace_cursor {
  color: #f2d5cf;
}
.ace-catppuccin-frappe .ace_marker-layer .ace_selection {
  background: rgba(131, 139, 167, 0.4);
  border-radius: 0;
}
.ace-catppuccin-frappe .ace_meta.ace_selector {
  color: #ca9ee6;
}
.ace-catppuccin-frappe .ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px black;
}
.ace-catppuccin-frappe .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}
.ace-catppuccin-frappe .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(148, 156, 187, 0.5);
}
.ace-catppuccin-frappe .ace_marker-layer .ace_active-line {
  background: rgba(198, 208, 245, 0.07);
  border-top: 1px solid rgba(186, 187, 241, 0.07);
  border-bottom: 1px solid rgba(186, 187, 241, 0.07);
  box-sizing: border-box;
}
.ace-catppuccin-frappe .ace_marker-layer .ace_selected-word {
  background-color: rgba(129, 200, 190, 0.3);
  color: #292c3c;
}
.ace-catppuccin-frappe .ace_invisible {
  color: rgba(148, 156, 187, 0.4);
}
.ace-catppuccin-frappe .hljs-keyword,
.ace-catppuccin-frappe .ace_keyword {
  color: #ca9ee6;
  font-style: italic;
}
.ace-catppuccin-frappe .ace_keyword.ace_operator {
  color: #99d1db;
  font-style: bold;
}
.ace-catppuccin-frappe .ace_constant.ace_language {
  color: #ef9f76;
}
.ace-catppuccin-frappe .ace_constant.ace_numeric {
  color: #ef9f76;
}
.ace-catppuccin-frappe .ace_constant.ace_character {
  color: #ef9f76;
}
.ace-catppuccin-frappe .ace_constant.ace_character.ace_escape {
  color: #f4b8e4;
}
.ace-catppuccin-frappe .ace_constant.ace_other {
  color: #f4b8e4;
}
.ace-catppuccin-frappe .hljs-title,
.ace-catppuccin-frappe .ace_identifier {
  color: #c6d0f5;
}
.ace-catppuccin-frappe .ace_support.ace_function {
  color: #8caaee;
}
.ace-catppuccin-frappe .ace_support.ace_function.ace_dom {
  color: #ea999c;
}
.ace-catppuccin-frappe .ace_support.ace_constant {
  color: #babbf1;
}
.ace-catppuccin-frappe .ace_class {
  color: #e5c890;
}
.ace-catppuccin-frappe .ace_variable.ace_language {
  color: #f2d5cf;
}
.ace-catppuccin-frappe .ace_support.ace_type {
  color: #eebebe;
  font-style: italic;
}
.ace-catppuccin-frappe .ace_meta.ace_tag {
  color: #ca9ee6;
}
.ace-catppuccin-frappe .ace_storage,
.ace-catppuccin-frappe .ace_storage.ace_type {
  color: #e78284;
}
.ace-catppuccin-frappe .ace_storage.ace_type.ace_variable.ace_ts {
  color: #e5c890;
}
.ace-catppuccin-frappe .ace_constant.ace_buildin {
  color: #e78284;
}
.ace-catppuccin-frappe .ace_fold {
  background-color: #414559;
  border-color: #51576d;
}
.ace-catppuccin-frappe .ace_invalid {
  color: #c6d0f5;
  background-color: #e78284;
}
.ace-catppuccin-frappe .ace_invalid.ace_deprecated {
  color: #c6d0f5;
  background-color: #ca9ee6;
}
.ace-catppuccin-frappe .ace_string {
  color: #a6d189;
}
.ace-catppuccin-frappe .ace_comment {
  color: #949cbb;
  font-style: italic;
}
.ace-catppuccin-frappe .ace_variable {
  color: #99d1db;
}
.ace-catppuccin-frappe .ace_constant {
  color: #ef9f76;
}
.ace-catppuccin-frappe .hljs-params,
.ace-catppuccin-frappe .ace_variable.ace_parameter {
  color: #ea999c;
  font-style: italic;
}
.ace-catppuccin-frappe .ace_entity.ace_other.ace_attribute-name {
  color: #e5c890;
}
.ace-catppuccin-frappe .ace_xml-pe.ace_xml,
.ace-catppuccin-frappe .ace_punctuation.ace_tag {
  color: #949cbb;
}
.ace-catppuccin-frappe .ace_tag-name.ace_tag,
.ace-catppuccin-frappe .ace_entity.ace_name.ace_tag {
  color: #ca9ee6;
}
.ace-catppuccin-frappe .ace_paren {
  color: #949cbb;
}
.ace-catppuccin-frappe .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-frappe .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-frappe .ace_support.ace_constant.ace_js {
  color: #81c8be;
}
.ace-catppuccin-frappe .ace_entity.ace_name.ace_function {
  color: #8caaee;
}
.ace-catppuccin-frappe .ace_tooltip {
  background-color: #414559 !important;
  color: #c6d0f5 !important;
}
.ace-catppuccin-frappe .ace_icon_svg.ace_error,
.ace-catppuccin-frappe .ace_icon_svg.ace_error_fold {
  background-color: #e78284;
}
.ace-catppuccin-frappe .ace_icon_svg.ace_security,
.ace-catppuccin-frappe .ace_icon_svg.ace_security_fold {
  background-color: #e78284;
}
.ace-catppuccin-frappe .ace_icon_svg.ace_warning,
.ace-catppuccin-frappe .ace_icon_svg.ace_warning_fold {
  background-color: #e5c890;
}
.ace-catppuccin-frappe .ace_icon_svg.ace_info {
  background-color: #99d1db;
}
.ace-catppuccin-frappe .ace_icon_svg.ace_hint {
  background-color: #99d1db;
}
.ace-catppuccin-frappe .ace_highlight-marker {
  background: none;
  border: #99d1db 1px solid;
}
.ace-catppuccin-frappe .ace_tooltip.ace_hover-tooltip:focus > div {
  outline: 1px solid #99d1db;
}
.ace-catppuccin-frappe .ace_snippet-marker {
  background-color: #414559;
  border: 0;
}
.ace-catppuccin-frappe .ace_support.ace_constant.ace_css-in-js {
  color: #ef9f76;
}
.ace-catppuccin-frappe .ace_editor.ace_autocomplete .ace_line-hover {
  border: 1px solid #99d1db !important;
  background: #949cbb !important;
}
.ace-catppuccin-frappe .ace_editor.ace_autocomplete .ace_completion-meta {
  color: #949cbb !important;
  opacity: 1;
}
.ace-catppuccin-frappe .ace_tooltip-marker-error.ace_tooltip-marker {
  background-color: #e78284 !important;
}
.ace-catppuccin-frappe .ace_tooltip-marker-security.ace_tooltip-marker {
  background-color: #e78284 !important;
}
.ace-catppuccin-frappe .ace_tooltip-marker-warning.ace_tooltip-marker {
  background-color: #e5c890 !important;
}

.ace-catppuccin-macchiato {
  color: #cad3f5;
  background-color: #24273a;
  /**
  * keywords
  * for example if else 
  * ID in css
  */
  /**
  * Don't change indent guide 
  */
  /**
   * All the highlight rules bellow require extra syntax highlight plugin
  **/
}
.ace-catppuccin-macchiato .ace_gutter {
  color: #939ab7;
}
.ace-catppuccin-macchiato .ace_gutter-active-line {
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-top: 1px solid rgba(183, 189, 248, 0.07);
  border-bottom: 1px solid rgba(183, 189, 248, 0.07);
  color: #b7bdf8;
  background: rgba(202, 211, 245, 0.07);
}
.ace-catppuccin-macchiato .ace_print-margin {
  width: 1px;
  background: #b8c0e0;
}
.ace-catppuccin-macchiato .ace_cursor {
  color: #f4dbd6;
}
.ace-catppuccin-macchiato .ace_marker-layer .ace_selection {
  background: rgba(128, 135, 162, 0.4);
  border-radius: 0;
}
.ace-catppuccin-macchiato .ace_meta.ace_selector {
  color: #c6a0f6;
}
.ace-catppuccin-macchiato .ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px black;
}
.ace-catppuccin-macchiato .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}
.ace-catppuccin-macchiato .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(147, 154, 183, 0.5);
}
.ace-catppuccin-macchiato .ace_marker-layer .ace_active-line {
  background: rgba(202, 211, 245, 0.07);
  border-top: 1px solid rgba(183, 189, 248, 0.07);
  border-bottom: 1px solid rgba(183, 189, 248, 0.07);
  box-sizing: border-box;
}
.ace-catppuccin-macchiato .ace_marker-layer .ace_selected-word {
  background-color: rgba(139, 213, 202, 0.3);
  color: #1e2030;
}
.ace-catppuccin-macchiato .ace_invisible {
  color: rgba(147, 154, 183, 0.4);
}
.ace-catppuccin-macchiato .hljs-keyword,
.ace-catppuccin-macchiato .ace_keyword {
  color: #c6a0f6;
  font-style: italic;
}
.ace-catppuccin-macchiato .ace_keyword.ace_operator {
  color: #91d7e3;
  font-style: bold;
}
.ace-catppuccin-macchiato .ace_constant.ace_language {
  color: #f5a97f;
}
.ace-catppuccin-macchiato .ace_constant.ace_numeric {
  color: #f5a97f;
}
.ace-catppuccin-macchiato .ace_constant.ace_character {
  color: #f5a97f;
}
.ace-catppuccin-macchiato .ace_constant.ace_character.ace_escape {
  color: #f5bde6;
}
.ace-catppuccin-macchiato .ace_constant.ace_other {
  color: #f5bde6;
}
.ace-catppuccin-macchiato .hljs-title,
.ace-catppuccin-macchiato .ace_identifier {
  color: #cad3f5;
}
.ace-catppuccin-macchiato .ace_support.ace_function {
  color: #8aadf4;
}
.ace-catppuccin-macchiato .ace_support.ace_function.ace_dom {
  color: #ee99a0;
}
.ace-catppuccin-macchiato .ace_support.ace_constant {
  color: #b7bdf8;
}
.ace-catppuccin-macchiato .ace_class {
  color: #eed49f;
}
.ace-catppuccin-macchiato .ace_variable.ace_language {
  color: #f4dbd6;
}
.ace-catppuccin-macchiato .ace_support.ace_type {
  color: #f0c6c6;
  font-style: italic;
}
.ace-catppuccin-macchiato .ace_meta.ace_tag {
  color: #c6a0f6;
}
.ace-catppuccin-macchiato .ace_storage,
.ace-catppuccin-macchiato .ace_storage.ace_type {
  color: #ed8796;
}
.ace-catppuccin-macchiato .ace_storage.ace_type.ace_variable.ace_ts {
  color: #eed49f;
}
.ace-catppuccin-macchiato .ace_constant.ace_buildin {
  color: #ed8796;
}
.ace-catppuccin-macchiato .ace_fold {
  background-color: #363a4f;
  border-color: #494d64;
}
.ace-catppuccin-macchiato .ace_invalid {
  color: #cad3f5;
  background-color: #ed8796;
}
.ace-catppuccin-macchiato .ace_invalid.ace_deprecated {
  color: #cad3f5;
  background-color: #c6a0f6;
}
.ace-catppuccin-macchiato .ace_string {
  color: #a6da95;
}
.ace-catppuccin-macchiato .ace_comment {
  color: #939ab7;
  font-style: italic;
}
.ace-catppuccin-macchiato .ace_variable {
  color: #91d7e3;
}
.ace-catppuccin-macchiato .ace_constant {
  color: #f5a97f;
}
.ace-catppuccin-macchiato .hljs-params,
.ace-catppuccin-macchiato .ace_variable.ace_parameter {
  color: #ee99a0;
  font-style: italic;
}
.ace-catppuccin-macchiato .ace_entity.ace_other.ace_attribute-name {
  color: #eed49f;
}
.ace-catppuccin-macchiato .ace_xml-pe.ace_xml,
.ace-catppuccin-macchiato .ace_punctuation.ace_tag {
  color: #939ab7;
}
.ace-catppuccin-macchiato .ace_tag-name.ace_tag,
.ace-catppuccin-macchiato .ace_entity.ace_name.ace_tag {
  color: #c6a0f6;
}
.ace-catppuccin-macchiato .ace_paren {
  color: #939ab7;
}
.ace-catppuccin-macchiato .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-macchiato .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-macchiato .ace_support.ace_constant.ace_js {
  color: #8bd5ca;
}
.ace-catppuccin-macchiato .ace_entity.ace_name.ace_function {
  color: #8aadf4;
}
.ace-catppuccin-macchiato .ace_tooltip {
  background-color: #363a4f !important;
  color: #cad3f5 !important;
}
.ace-catppuccin-macchiato .ace_icon_svg.ace_error,
.ace-catppuccin-macchiato .ace_icon_svg.ace_error_fold {
  background-color: #ed8796;
}
.ace-catppuccin-macchiato .ace_icon_svg.ace_security,
.ace-catppuccin-macchiato .ace_icon_svg.ace_security_fold {
  background-color: #ed8796;
}
.ace-catppuccin-macchiato .ace_icon_svg.ace_warning,
.ace-catppuccin-macchiato .ace_icon_svg.ace_warning_fold {
  background-color: #eed49f;
}
.ace-catppuccin-macchiato .ace_icon_svg.ace_info {
  background-color: #91d7e3;
}
.ace-catppuccin-macchiato .ace_icon_svg.ace_hint {
  background-color: #91d7e3;
}
.ace-catppuccin-macchiato .ace_highlight-marker {
  background: none;
  border: #91d7e3 1px solid;
}
.ace-catppuccin-macchiato .ace_tooltip.ace_hover-tooltip:focus > div {
  outline: 1px solid #91d7e3;
}
.ace-catppuccin-macchiato .ace_snippet-marker {
  background-color: #363a4f;
  border: 0;
}
.ace-catppuccin-macchiato .ace_support.ace_constant.ace_css-in-js {
  color: #f5a97f;
}
.ace-catppuccin-macchiato .ace_editor.ace_autocomplete .ace_line-hover {
  border: 1px solid #91d7e3 !important;
  background: #939ab7 !important;
}
.ace-catppuccin-macchiato .ace_editor.ace_autocomplete .ace_completion-meta {
  color: #939ab7 !important;
  opacity: 1;
}
.ace-catppuccin-macchiato .ace_tooltip-marker-error.ace_tooltip-marker {
  background-color: #ed8796 !important;
}
.ace-catppuccin-macchiato .ace_tooltip-marker-security.ace_tooltip-marker {
  background-color: #ed8796 !important;
}
.ace-catppuccin-macchiato .ace_tooltip-marker-warning.ace_tooltip-marker {
  background-color: #eed49f !important;
}

.ace-catppuccin-mocha {
  color: #cdd6f4;
  background-color: #1e1e2e;
  /**
  * keywords
  * for example if else 
  * ID in css
  */
  /**
  * Don't change indent guide 
  */
  /**
   * All the highlight rules bellow require extra syntax highlight plugin
  **/
}
.ace-catppuccin-mocha .ace_gutter {
  color: #9399b2;
}
.ace-catppuccin-mocha .ace_gutter-active-line {
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-top: 1px solid rgba(180, 190, 254, 0.07);
  border-bottom: 1px solid rgba(180, 190, 254, 0.07);
  color: #b4befe;
  background: rgba(205, 214, 244, 0.07);
}
.ace-catppuccin-mocha .ace_print-margin {
  width: 1px;
  background: #bac2de;
}
.ace-catppuccin-mocha .ace_cursor {
  color: #f5e0dc;
}
.ace-catppuccin-mocha .ace_marker-layer .ace_selection {
  background: rgba(127, 132, 156, 0.4);
  border-radius: 0;
}
.ace-catppuccin-mocha .ace_meta.ace_selector {
  color: #cba6f7;
}
.ace-catppuccin-mocha .ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px black;
}
.ace-catppuccin-mocha .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}
.ace-catppuccin-mocha .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(147, 153, 178, 0.5);
}
.ace-catppuccin-mocha .ace_marker-layer .ace_active-line {
  background: rgba(205, 214, 244, 0.07);
  border-top: 1px solid rgba(180, 190, 254, 0.07);
  border-bottom: 1px solid rgba(180, 190, 254, 0.07);
  box-sizing: border-box;
}
.ace-catppuccin-mocha .ace_marker-layer .ace_selected-word {
  background-color: rgba(148, 226, 213, 0.3);
  color: #181825;
}
.ace-catppuccin-mocha .ace_invisible {
  color: rgba(147, 153, 178, 0.4);
}
.ace-catppuccin-mocha .hljs-keyword,
.ace-catppuccin-mocha .ace_keyword {
  color: #cba6f7;
  font-style: italic;
}
.ace-catppuccin-mocha .ace_keyword.ace_operator {
  color: #89dceb;
  font-style: bold;
}
.ace-catppuccin-mocha .ace_constant.ace_language {
  color: #fab387;
}
.ace-catppuccin-mocha .ace_constant.ace_numeric {
  color: #fab387;
}
.ace-catppuccin-mocha .ace_constant.ace_character {
  color: #fab387;
}
.ace-catppuccin-mocha .ace_constant.ace_character.ace_escape {
  color: #f5c2e7;
}
.ace-catppuccin-mocha .ace_constant.ace_other {
  color: #f5c2e7;
}
.ace-catppuccin-mocha .hljs-title,
.ace-catppuccin-mocha .ace_identifier {
  color: #cdd6f4;
}
.ace-catppuccin-mocha .ace_support.ace_function {
  color: #89b4fa;
}
.ace-catppuccin-mocha .ace_support.ace_function.ace_dom {
  color: #eba0ac;
}
.ace-catppuccin-mocha .ace_support.ace_constant {
  color: #b4befe;
}
.ace-catppuccin-mocha .ace_class {
  color: #f9e2af;
}
.ace-catppuccin-mocha .ace_variable.ace_language {
  color: #f5e0dc;
}
.ace-catppuccin-mocha .ace_support.ace_type {
  color: #f2cdcd;
  font-style: italic;
}
.ace-catppuccin-mocha .ace_meta.ace_tag {
  color: #cba6f7;
}
.ace-catppuccin-mocha .ace_storage,
.ace-catppuccin-mocha .ace_storage.ace_type {
  color: #f38ba8;
}
.ace-catppuccin-mocha .ace_storage.ace_type.ace_variable.ace_ts {
  color: #f9e2af;
}
.ace-catppuccin-mocha .ace_constant.ace_buildin {
  color: #f38ba8;
}
.ace-catppuccin-mocha .ace_fold {
  background-color: #313244;
  border-color: #45475a;
}
.ace-catppuccin-mocha .ace_invalid {
  color: #cdd6f4;
  background-color: #f38ba8;
}
.ace-catppuccin-mocha .ace_invalid.ace_deprecated {
  color: #cdd6f4;
  background-color: #cba6f7;
}
.ace-catppuccin-mocha .ace_string {
  color: #a6e3a1;
}
.ace-catppuccin-mocha .ace_comment {
  color: #9399b2;
  font-style: italic;
}
.ace-catppuccin-mocha .ace_variable {
  color: #89dceb;
}
.ace-catppuccin-mocha .ace_constant {
  color: #fab387;
}
.ace-catppuccin-mocha .hljs-params,
.ace-catppuccin-mocha .ace_variable.ace_parameter {
  color: #eba0ac;
  font-style: italic;
}
.ace-catppuccin-mocha .ace_entity.ace_other.ace_attribute-name {
  color: #f9e2af;
}
.ace-catppuccin-mocha .ace_xml-pe.ace_xml,
.ace-catppuccin-mocha .ace_punctuation.ace_tag {
  color: #9399b2;
}
.ace-catppuccin-mocha .ace_tag-name.ace_tag,
.ace-catppuccin-mocha .ace_entity.ace_name.ace_tag {
  color: #cba6f7;
}
.ace-catppuccin-mocha .ace_paren {
  color: #9399b2;
}
.ace-catppuccin-mocha .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-mocha .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
.ace-catppuccin-mocha .ace_support.ace_constant.ace_js {
  color: #94e2d5;
}
.ace-catppuccin-mocha .ace_entity.ace_name.ace_function {
  color: #89b4fa;
}
.ace-catppuccin-mocha .ace_tooltip {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
.ace-catppuccin-mocha .ace_icon_svg.ace_error,
.ace-catppuccin-mocha .ace_icon_svg.ace_error_fold {
  background-color: #f38ba8;
}
.ace-catppuccin-mocha .ace_icon_svg.ace_security,
.ace-catppuccin-mocha .ace_icon_svg.ace_security_fold {
  background-color: #f38ba8;
}
.ace-catppuccin-mocha .ace_icon_svg.ace_warning,
.ace-catppuccin-mocha .ace_icon_svg.ace_warning_fold {
  background-color: #f9e2af;
}
.ace-catppuccin-mocha .ace_icon_svg.ace_info {
  background-color: #89dceb;
}
.ace-catppuccin-mocha .ace_icon_svg.ace_hint {
  background-color: #89dceb;
}
.ace-catppuccin-mocha .ace_highlight-marker {
  background: none;
  border: #89dceb 1px solid;
}
.ace-catppuccin-mocha .ace_tooltip.ace_hover-tooltip:focus > div {
  outline: 1px solid #89dceb;
}
.ace-catppuccin-mocha .ace_snippet-marker {
  background-color: #313244;
  border: 0;
}
.ace-catppuccin-mocha .ace_support.ace_constant.ace_css-in-js {
  color: #fab387;
}
.ace-catppuccin-mocha .ace_editor.ace_autocomplete .ace_line-hover {
  border: 1px solid #89dceb !important;
  background: #9399b2 !important;
}
.ace-catppuccin-mocha .ace_editor.ace_autocomplete .ace_completion-meta {
  color: #9399b2 !important;
  opacity: 1;
}
.ace-catppuccin-mocha .ace_tooltip-marker-error.ace_tooltip-marker {
  background-color: #f38ba8 !important;
}
.ace-catppuccin-mocha .ace_tooltip-marker-security.ace_tooltip-marker {
  background-color: #f38ba8 !important;
}
.ace-catppuccin-mocha .ace_tooltip-marker-warning.ace_tooltip-marker {
  background-color: #f9e2af !important;
}

.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
  border: 1.5px solid var(--active-color) !important;
  background: var(--border-color) !important;
}

.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight {
  color: var(--active-color) !important;
}

.ace_dark.ace_editor.ace_autocomplete {
  border-radius: 2px !important;
}`});var C=k((A,l)=>{b();g();var r=acode.require("themes"),p=acode.require("themeBuilder"),i=acode.require("settings"),{editor:f}=editorManager,h=["latte","frappe","macchiato","mocha"],n="catppuccin";h.forEach(a=>{let c=`${n}-${a}`;ace.define(`ace/theme/${c}.css`,["require","exports","module"],function(e,o,t){t.exports=s}),ace.define(`ace/theme/${c}`,["require","exports","module",`ace/theme/${c}.css`,"ace/lib/dom"],function(e,o,t){o.isDark=a!=="latte",o.cssClass=`ace-${c}`,o.cssText=e(`./${c}.css`),e("../lib/dom").importCssString(o.cssText,o.cssClass,!1)}),function(){window.require([`ace/theme/${c}`],function(e){typeof l=="object"&&typeof A=="object"&&l&&(l.exports=e)})}()});var d=class{async init(){try{let c=document.createElement("style");c.textContent=`
                .open-file-list li.tile.active {
                    border: none;
                    border-top: 2px solid var(--active-color);
                }
                .open-file-list li.tile.notice:before {
                    content: '\u2022';
                    color: var(--active-color);
                    font-size: 1.5em;
                    margin-left: 2.5px;
                    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
                }
            `,document.head.append(c),r.add(this.latteAppTheme()),r.add(this.frappeAppTheme()),r.add(this.macchiatoAppTheme()),r.add(this.mochaAppTheme());let e=ace.require("ace/ext/themelist").themes;h.forEach(t=>{let _=`${n}-${t}`;e.push({caption:`Catppuccin ${t[0].toUpperCase()+t.slice(1)}`,theme:`ace/theme/${_}`,isDark:t!=="latte"})});let o=i.get("editorTheme");o.startsWith(n)&&f.setTheme(`ace/theme/${o}`),i.on("update",this.onThemeChange.bind(this))}catch(c){console.error(c),acode.alert("Warning","Please restart acode")}}latteAppTheme(){let c=new p("Catppuccin Latte \u{1F33B}","light","free");return c.popupBorderRadius="8px",c.activeColor="#1e66f5",c.activeIconColor="#8c8fa1",c.borderColor="#ccd0da",c.buttonActiveColor="#acb0be",c.buttonBackgroundColor="#bcc0cc",c.buttonTextColor="#5c5f77",c.errorTextColor="#d20f39",c.primaryColor="#dce0e8",c.darkenedPrimaryColor="#dce0e8",c.primaryTextColor="#4c4f69",c.secondaryColor="#eff1f5",c.secondaryTextColor="#4c4f69",c.linkTextColor="#1e66f5",c.scrollbarColor="#8839ef33",c.popupBorderColor="#ccd0da",c.popupIconColor="#5c5f77",c.popupBackgroundColor="#dce0e8",c.popupTextColor="#7c7f93",c.popupActiveColor="#ccd0da",c.dangerColor="#fe640b",c.preferredEditorTheme="catppuccin-latte",c}frappeAppTheme(){let c=new p("Catppuccin Frapp\xE9 \u{1FAB4}","dark","free");return c.popupBorderRadius="8px",c.activeColor="#8caaee",c.activeIconColor="#838ba7",c.borderColor="#414559",c.buttonActiveColor="#626880",c.buttonBackgroundColor="#51576d",c.buttonTextColor="#b5bfe2",c.errorTextColor="#e78284",c.primaryColor="#232634",c.darkenedPrimaryColor="#232634",c.primaryTextColor="#c6d0f5",c.secondaryColor="#303446",c.secondaryTextColor="#c6d0f5",c.linkTextColor="#8caaee",c.scrollbarColor="#ca9ee633",c.popupBorderColor="#414559",c.popupIconColor="#b5bfe2",c.popupBackgroundColor="#232634",c.popupTextColor="#949cbb",c.popupActiveColor="#414559",c.dangerColor="#ef9f76",c.preferredEditorTheme="catppuccin-frappe",c}macchiatoAppTheme(){let c=new p("Catppuccin Macchiato \u{1F33A}","dark","free");return c.popupBorderRadius="8px",c.activeColor="#8aadf4",c.activeIconColor="#8087a2",c.borderColor="#363a4f",c.buttonActiveColor="#5b6078",c.buttonBackgroundColor="#494d64",c.buttonTextColor="#b8c0e0",c.errorTextColor="#ed8796",c.primaryColor="#181926",c.darkenedPrimaryColor="#181926",c.primaryTextColor="#cad3f5",c.secondaryColor="#1e1e2e",c.secondaryTextColor="#cad3f5",c.linkTextColor="#8aadf4",c.scrollbarColor="#c6a0f633",c.popupBorderColor="#363a4f",c.popupIconColor="#b8c0e0",c.popupBackgroundColor="#181926",c.popupTextColor="#939ab7",c.popupActiveColor="#363a4f",c.dangerColor="#f5a97f",c.preferredEditorTheme="catppuccin-macchiato",c}mochaAppTheme(){let c=new p("Catppuccin Mocha \u{1F33F}","dark","free");return c.popupBorderRadius="8px",c.activeColor="#89b4fa",c.activeIconColor="#7f849c",c.borderColor="#313244",c.buttonActiveColor="#585b70",c.buttonBackgroundColor="#45475a",c.buttonTextColor="#bac2de",c.errorTextColor="#f38ba8",c.primaryColor="#11111b",c.darkenedPrimaryColor="#11111b",c.primaryTextColor="#cdd6f4",c.secondaryColor="#1e1e2e",c.secondaryTextColor="#cdd6f4",c.linkTextColor="#89b4fa",c.scrollbarColor="#cba6f733",c.popupBorderColor="#313244",c.popupIconColor="#bac2de",c.popupBackgroundColor="#11111b",c.popupTextColor="#9399b2",c.popupActiveColor="#313244",c.dangerColor="#fab387",c.preferredEditorTheme="catppuccin-mocha",c}onThemeChange(c){if(typeof c=="string"&&c.includes(n)){let e=c;c.startsWith("ace/theme/")&&(e=c?.replace("ace/theme/",""),i.update({editorTheme:e})),f.setTheme(`ace/theme/${e}`)}}async destroy(){i.off("update",this.onThemeChange)}};if(window.acode){let a=new d;acode.setPluginInit(u.id,async(c,e,{cacheFileUrl:o,cacheFile:t})=>{c.endsWith("/")||(c+="/"),a.baseUrl=c,await a.init(e,t,o)},a.settingsObj),acode.setPluginUnmount(u.id,()=>{a.destroy()})}});C();})();
