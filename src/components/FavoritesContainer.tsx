import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonText, IonIcon, IonButton } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

const CleanEarthFavorites: React.FC = () => {
  const [favorites, setFavorites] = useState<{ title: string; img: string; liked: boolean }[]>([
    { title: 'PICKACHU', img: 'https://i.pinimg.com/originals/8a/81/ec/8a81ecd8fdd266b3221da325875c0ea8.gif', liked: false },
    { title: 'ASH', img: 'https://i.pinimg.com/originals/ea/f8/de/eaf8de3b9b7dfb994430fe8999c76f3b.gif', liked: false },
    { title: 'ARCHEUS', img: 'https://i.pinimg.com/originals/7f/88/d8/7f88d8e496fb3555ebbe88c0edfea6d2.gif', liked: false }
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