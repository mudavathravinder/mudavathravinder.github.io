import {Particles} from'react-tsparticles';
import {loadFull} from 'tsparticles' ;
import React, {useCallback} from 'react';


const Particlescontainer = () => {
  // init
  const ParticlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const ParticlesLoaded = useCallback(async () => {},[]);

  return(
    <Particles
      className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={ParticlesInit}
      Loaded={ParticlesLoaded}
      options={{
        fullScreen: {enable: false},
        background:  {
          color: {
            value:'',
          },
        },
        fpsLimit: 120,
        interactivity:{
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
             onHover: {
              enable: true,
              mode: 'repulse',
             },
             resize: true,
          },
          modes:{
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration:0.4,
            },
          },
        },
        Particles: {
          color:{
            value:'#e68e2e',
          },
          links: {
            color:'#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outmodes: {
              default: 'bounce',
            },
            random: false,
            speed:1,
            straight: false
          },
          Number:{
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value:0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {min: 1, max: 5},
          },
        },
        detectRetina: true,
      }}
    />
  );
   
};

export default Particlescontainer;