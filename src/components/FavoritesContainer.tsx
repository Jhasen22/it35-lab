import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonText, IonIcon, IonButton } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

const CleanEarthFavorites: React.FC = () => {
  const [favorites, setFavorites] = useState<{ title: string; img: string; liked: boolean }[]>([
    { title: 'CODING', img: 'https://media2.giphy.com/media/qgQUggAC3Pfv687qPC/200w.gif?cid=6c09b952k2ksls97krspmveayn05lb6eg2hz1h2dnzfa39qg&ep=v1_gifs_search&rid=200w.gif&ct=g', liked: false },
    { title: 'WEB DEVELOPING', img: 'https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif/', liked: false },
    { title: 'APP DEVELOPING', img: 'https://i.pinimg.com/originals/7c/4e/b6/7c4eb6fa3c754c7aab0863f107f15f3a.gif', liked: false }
  ]);

  const toggleLike = (index: number) => {
    setFavorites(prev => prev.map((item, i) => (i === index ? { ...item, liked: !item.liked } : item)));
  };

  return (
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          {favorites.map((item, index) => (
            <IonCol size="12" sizeMd="4" key={index}>
              <IonCard>
                <IonImg src={item.img} alt={item.title} />
                <IonCardContent className="text-center">
                  <IonText>{item.title}</IonText>
                  <IonButton fill="clear" onClick={() => toggleLike(index)}>
                    <IonIcon icon={item.liked ? heart : heartOutline} color={item.liked ? 'success' : 'medium'} />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default CleanEarthFavorites;