import spartaGlobalFunctions from '@sparta.global.utilities/sparta-global-functions-utility';

export default {
    name: 'SignIn', // The name of the component
    data() {
        return {
            subChannel: '', // Placeholder value, updated dynamically in `created`
        };
    },
    created() {
        // Dynamically set `subChannel` after the component is created
        this.subChannel = spartaGlobalFunctions.getUrlParam('subChannel', 'defaultSubChannel');
        console.log(`SubChannel retrieved: ${this.subChannel}`);
    },
};



const subChannel = this.$root.SpartaFunctions?.getUrlParam?.('subChannel') || new URLSearchParams(window.location.search).get('subChannel') || 'defaultSubchannel';
spartaGlobalFunctions.spartaSetCookie('subChannel', subChannel);
