import LocalizedStrings from 'react-localization';

const Home = new LocalizedStrings({
    en: {
        KEY_1: 'Home Page',
        KEY_2: 'Welcome Home',
        KEY_3: 'Button Not Clicked',
        KEY_4: 'Button Clicked'
    },
    fr: {
      KEY_1: 'Page d\'accueil',
      KEY_2: 'Bienvenue a chez moi!',
      KEY_3: 'Bouton Non cliqué',
      KEY_4: 'Bouton cliqué'
    }
});

export default Home;
