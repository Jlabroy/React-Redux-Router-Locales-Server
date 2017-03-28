import LocalizedStrings from 'react-localization';

const Route = new LocalizedStrings({
  en: {
    HOME: {
      link: '/en/',
      text: 'Home'
    },
    CONFERENCE_CALL: {
      link: '/en/conference-call',
      text: 'Conference Call'
    },
    CONTACT: {
      link: '/en/contact',
      text: 'Contact'
    }
  },
  fr: {
    HOME: {
      link: '/fr/',
      text: "Page d'accueil"
    },
    CONFERENCE_CALL: {
      link: '/fr/conference-telephonique',
      text: 'Conference Telephonique'
    },
    CONTACT: {
      link: '/fr/contact',
      text: 'Contact'
    }
  }
});

export default Route;
