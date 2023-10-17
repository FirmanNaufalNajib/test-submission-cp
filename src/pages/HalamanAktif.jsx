import React from 'react';
import ListCatatan from '../components/ListCatatan';
import { getActiveNotes } from '../utils/local-data';

class HalamanAktif extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatanAktif: getActiveNotes()
    }
  }
  render() {
    return (
      <section>
        <h2>Catatan Aktif</h2>
        <ListCatatan notes={this.state.catatanAktif} />
      </section>
    )
  }

}

export default HalamanAktif






