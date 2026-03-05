import spartaShowHide from '@sparta.global.utilities/sparta-show-hide-utility';
import { showHide } from '@sparta.global.helpers/show-hide-helper';

export default {
  name: 'ShowHideHelper',
  props: {
    jcr: {
      type: Object
    },
    hbs: {
      type: String,
      default: '<p>{{text}}</p>'
    }
  },
  methods: {
    onShow() {
      const initShowHide = () => spartaShowHide.init({ showControls: true });
      document.addEventListener('DOMContentLoaded', initShowHide);
      const getAppButton = document.getElementsByClassName('spa-show-hide-control');
      Array.from(getAppButton).forEach((key, index) => {
        if (getAppButton[index]) {
          getAppButton[index].addEventListener('click', () => {
            const collapseButtonTxt = document.getElementsByClassName('show-hide-button-text');
            console.log(this.$options.propsData.jcr.collapseText);
            const el = document.getElementsByClassName('spa-show-hide-control');

            if (el[index].ariaExpanded === 'false') {
              // ...
            } else if (el[index].ariaExpanded === 'true') {
              // ...
            }
          });
        }
      });
    }
  },
  render(h) {
    // eslint-disable-line no-unused-vars
    return (
      <div>
        <GlobalRenderSpartaHelper
          helperInfo={{
            helperImport: showHide,
            showHide,
            args: this.jcr,
            helperBlockContent: this.hbs
          }}
          mount={this.onShow}
        />
      </div>
    );
  }
};
