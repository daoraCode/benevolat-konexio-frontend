import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Newnews = styled.div`
display: flex;
// .news {
//     display: flex;
//     flex-direction: row;
// }

.news h2 {
    font-size: 60px;
    margin-left: 50px;
    color: #0375BB;
    display: flex;
    margin-top: 20px;
}

.news p {
        background-color: #D7D8D8;
        border-radius: 10px;
        font-size: 15px;
        padding-left: 30px;
        margin-right: 130px;
        margin-top: 25px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-left: 50px;

}

`
const News = () => {
    return (
        <Newnews>
            <Sidebar />  
        <div className="news">
            <h2>News</h2>
            <p> Bonjour, 
                    veuillez notez que la session Digistart du 29 mai 2022
                    sera décalée d'une semaine, pour une question d'organisation.
                    <br/>
                    Merci.                    
                </p>

                <p> Bonjour, 
                    veuillez notez que la session Digistart du 29 mai 2022
                    sera décalée d'une semaine, pour une question d'organisation.
                    <br/>
                    Merci.                    
                </p>

                <p> Bonjour, 
                    veuillez notez que la session Digistart du 29 mai 2022
                    sera décalée d'une semaine, pour une question d'organisation.
                    <br/>
                    Merci.                    
                </p>

                <p> Bonjour, 
                    veuillez notez que la session Digistart du 29 mai 2022
                    sera décalée d'une semaine, pour une question d'organisation.
                    <br/>
                    Merci.                    
                </p>
         
            </div>
        </Newnews>
    );
};

export default News;