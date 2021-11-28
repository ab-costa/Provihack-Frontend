import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarkerPopup from '../../components/MarkerPopup';
import ReactMapGl from 'react-map-gl';

import './style.css';

export default function Mapa() {
  const [viewPortMapVisibility, setViewPortMapVisibility] = useState(true);
  let [viewport, setViewPort] = useState({
    latitude: -23.55002958042815,
    longitude: -46.63425454663673,
    zoom: 12.9,
    width: "90vw",
    height: "70vh",
    pitch: 50
  });

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.642, -23.546]
        },
        properties: {
          title: 'Biblioteca Mário de Andrade',
          description: 'Além de totalmente adaptada a cadeirantes, a biblioteca possui intérpretes de libras e itens em braile e áudio.',
          address: 'Rua da Consolação, 94 - República'
        }
      },


      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.639087068788776, -23.54438893513031]
        },
        properties: {
          title: 'Theatro Municipal',
          description: 'O local oferece como recurso para cegos materiais táteis e olfativos sobre a história do edifício. Além disso, o acesso para cadeirantes é feito através de uma plataforma localizada no portão esquerdo do teatro. Também possui assento, banheiro e estacionamento com acessibilidade, bem como elevadores.',
          address: 'Praça Ramos de Azevedo, s/n - República'
        }
      },


      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.639087068788776, -23.54438893513031]
        },
        properties: {
          title: 'Galeria do Rock',
          description: 'O local conta com elevadores e rampas para acessibilidade.',
          address: 'Av. São João, 439 - República'
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.629514746033294, -23.54105180053576]
        },
        properties: {
          title: 'Mercado Municipal de São Paulo',
          description: 'O local conta com entradas com rampas e elevador para acesso ao mezanino.',
          address: 'R. Cantareira, 306 - Centro Histórico de São Paulo'
        }
      },


      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.6351204539667, -23.55445538171397]
        },
        properties: {
          title: '89ºC Coffee Station',
          description: 'O local apresenta escadas que levam às mesas e não possui banheiros com acessibilidade.',
          address: 'Praça da Liberdade, 169 - Liberdade'
        }
      },


      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.63257638465558, -23.54737730375528]
        },
        properties: {
          title: 'Museu Pateo do Collegio',
          description: 'O local possui elevador, entrada e estacionamento com acessibilidade.',
          address: 'Praça Pateo do Collegio, 2 - Centro Histórico de São Paulo'
        }
      },


      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.639087068788776, -23.54438893513031]
        },
        properties: {
          title: 'Pinacoteca',
          description: 'O local possui material informativo, vídeo guia e intérprete de libras, educadores surdos e ouvintes fluentes em Libras. Possui a Central de Libras – CELIG. Entrada acessível. Conta com banheiros adaptados, pavimentos por elevador e as obras estão dispostas em altura acessível. Há lugares reservados para cadeiras de rodas no auditório. Disponibiliza profissionais para o atendimento, adequação de roteiro na mediação e materiais multissensoriais. Podem ser agendadas visitas inclusivas. Oferecem acervo e material informativo em braile, áudio e ampliado. Conta com galeria tátil de escultura e guias-intérprete.',
          address: 'Praça da Luz, 2 - Luz'
        }
      },


      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-46.634553631109874, -23.547184464887376]
          // coordinates: [-46.35531002398789, -23.953469446798266]
        },
        properties: {
          title: 'Centro Cultural Banco do Brasil - CCBB',
          description: 'Disponibiliza intérpretes de libras nos espetáculos e legendas closed caption. Possuem educadores (surdo e ouvinte) fluentes em Libras, entrada acessível, banheiros adaptados, lugares reservados nos auditórios, profissionais treinados para atendimento, adequação de roteiro na mediação, visita com oficina inclusiva, audiodescrição, guia-intérprete, exposições acessíveis, percurso táteis, além de contar com recursos sensoriais.',
          address: 'Rua Álvares Penteado, 112 - Sé'
        }
      },
    ]
  };

  const features = geojson.features;
  console.log(features);
  console.log(features[0].geometry.coordinates.join('').replace('.', ''));

  return (
    <div className="map_page">
      <div className="box_header_viewport_map">
        <Header
          setViewPort={setViewPort}
          viewPortMapVisibility={viewPortMapVisibility}
          setViewPortMapVisibility={setViewPortMapVisibility}
        />
        {viewPortMapVisibility &&
          <div className="viewport_map">
            <ReactMapGl
              {...viewport}
              onViewportChange={(updatedViewport) => setViewPort(updatedViewport)}
              mapboxApiAccessToken={'pk.eyJ1IjoiYWItY29zdGEiLCJhIjoiY2t3aHZ1MnUxMTJwbTJ2b3ptNTRsNWt1YSJ9.f_53gozOVyksz9OoW59Ruw'}
              mapStyle={'mapbox://styles/mapbox/light-v10'}>
              {features.map(feature =>
                <MarkerPopup
                  latitude={feature.geometry.coordinates[1]}
                  longitude={feature.geometry.coordinates[0]}
                  title={feature.properties.title}
                  description={feature.properties.description}
                  address={feature.properties.address}
                />
              )}
            </ReactMapGl>
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

