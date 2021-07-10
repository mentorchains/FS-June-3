import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  console.log('hello world from api initializer!');
  const { iconNode } = require("discourse-common/lib/icon-library");

  api.onPageChange(() => {
    document.getElementById('themeCheckbox').onclick = function() {
      var cur = document.getElementById('themeCheckbox');
      if (cur.checked) {
        console.log('change to black');
        document.getElementsByClassName('contents clearfix').background = 'black';
      } else {
        console.log('change to red');
        document.getElementsByClassName('contents clearfix').background = 'red';
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
