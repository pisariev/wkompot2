import AppPage from './page';

class ProfilePage extends AppPage {
    get iconUser() { return $('img[alt="avatarIcon"]') }
}

export default new ProfilePage();


