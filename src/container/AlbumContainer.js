import App from "../component/App";
import { findAlbumImages } from '../redux/actions/album';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    albums: state.albums
});

const mapDispatchToProps = dispatch => ({
    loadAlbums: () => dispatch(findAlbumImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
