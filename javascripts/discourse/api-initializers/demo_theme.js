import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  console.log('hello world from api initializer!');
  const { iconNode } = require("discourse-common/lib/icon-library");
  
  api.onPageChange(() => {
    document.getElementById('themeCheckbox').onclick = function() {
      var cur = document.getElementById('themeCheckbox');
      if (cur.checked) {
        console.log('change to black');
        for (let i = 0; i < parameters.length; i++) {
          document.documentElement.style.setProperty('--' + parameters[i], '#' + latte_theme[i]);
        };

        elems = document.getElementsByClassName("themes")
        for (let i = 0; i < elems.length; i++) {
          elems[i].style.backgroundColor = "transparent";
          if (elems[i].id == 'latte_theme') {
            elems[i].style.backgroundColor = "var(--quaternary)";
          }
        }
      } else {
        console.log('change to red');
        for (let i = 0; i < parameters.length; i++) {
          document.documentElement.style.setProperty('--' + parameters[i], '#' + summer_theme[i]);
        };

        elems = document.getElementsByClassName("themes")
        for (let i = 0; i < elems.length; i++) {
          elems[i].style.backgroundColor = "transparent";
          if (elems[i].id == 'summer_theme') {
            elems[i].style.backgroundColor = "var(--quaternary)";
          }
        }
      } 
    }
  });
  
  api.decorateWidget('header-icons:before', helper => {
    return helper.h('li.ToggleWrapper', [
      helper.h('a.ToggleTitleLight', {
        text:'Light',
        title: 'Change the Theme Color to Light'
      }),
      helper.h('label.switch', [
        helper.h('input', {
          id:'themeCheckbox',
          type:'checkbox'
        }),
        helper.h('span.slider.round')
      ]),
      helper.h('a.ToggleTitleDark', {
        text:'Dark',
        title: 'Change the Theme Color to Dark'
      })
    ])
  });
});