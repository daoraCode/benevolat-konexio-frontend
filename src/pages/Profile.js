import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

import { useState } from 'react'
import CreateModifyModal from '../modals/CreateModifyModal';
// import CreateModifyForm from '../modals/CreateModifyForm';

const Info = styled.div`
.buttondisplayflex {
    display: flex;
}

.buttondisplayflex button {
    margin-left: 550px
}
.information h1 {
    font-size: 60px;
    margin-left: 50px;
    color: #0375BB;
    display: flex;
    margin-top: 20px;
}

.globalinfo {
    display: flex;
    color: #0375BB;
}

.information h2 {
    margin-left: 53px;
    color: #0375BB;
}

.information p {
    margin-left: 53px;
}

button {
    background-color: orange;
    border-radius: 30px;
    font-size: 20px;
    color: white;
    border: none;
    width: 100px;
    height: 40px;
}

.paragraphe1 {
    margin-top: 30px;
    margin-bottom: 50px;
}

.paragraphe2 {

}

`

const Profile = () => {
    const [createModifyModalVisible, setCreateModifyModalVisible] = useState(false)
    return (
        <Info>
        <div className="globalinfo">
            <Sidebar />
            <div className="information">
            <h1>Nom prénom</h1>
            <div className="buttondisplayflex">
            <h2>Nom entreprise</h2>
            <button onClick={() => setCreateModifyModalVisible(true)}>Modifier</button>
         </div>

        <div className="paragraphe1">
            <p>Date de début du bénévolat: xx/xx/xxxx</p>
            <p>Session: DigiStart/ DigitAll</p>
            <p>Horaires: 20h/ 36h</p>
        </div>
            <h2>Infos Personnelles</h2>
            <p>Email: nom.prenom@mail.com</p>
            <p>Mot de passe: xxxxxxxxxxxxxx</p>
            <p>N° de téléphone: xx.xx.xx.xx.xx</p>
            
            
            </div>
        </div>
        <CreateModifyModal
            isOpen={createModifyModalVisible}
            onClose={() => setCreateModifyModalVisible(false)}
            />
        </Info>
    );
};

export default Profile;