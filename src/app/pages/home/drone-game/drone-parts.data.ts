export interface DronePart {
  id: string;
  nameKey: string;
  image: string;
  x: number;
  y: number;
  collected: boolean;
  descriptionKey: string;
}

export const DRONE_PARTS: DronePart[] = [
  {
    id: 'frame',
    nameKey: 'droneGame.parts.droneFrame.name',
    image: 'assets/images/drone-parts/drone-frame.svg',
    x: 0,
    y: 0,
    collected: false,
    descriptionKey: 'droneGame.parts.droneFrame.description'
  },
  {
    id: 'camera',
    nameKey: 'droneGame.parts.fpvCamera.name',
    image: 'assets/images/drone-parts/fpv-camera.svg',
    x: 0,
    y: 0,
    collected: false,
    descriptionKey: 'droneGame.parts.fpvCamera.description'
  },
  {
    id: 'vtx',
    nameKey: 'droneGame.parts.vtx.name',
    image: 'assets/images/drone-parts/vtx.svg',
    x: 0,
    y: 0,
    collected: false,
    descriptionKey: 'droneGame.parts.vtx.description'
  },
  {
    id: 'propellers',
    nameKey: 'droneGame.parts.propellers.name',
    image: 'assets/images/drone-parts/propellers.svg',
    x: 0,
    y: 0,
    collected: false,
    descriptionKey: 'droneGame.parts.propellers.description'
  },
  {
    id: 'motors',
    nameKey: 'droneGame.parts.motors.name',
    image: 'assets/images/drone-parts/motors.svg',
    x: 0,
    y: 0,
    collected: false,
    descriptionKey: 'droneGame.parts.motors.description'
  },
  {
    id: 'nav-antenna',
    nameKey: 'droneGame.parts.navAntenna.name',
    image: 'assets/images/drone-parts/nav-antenna.svg',
    x: 0,
    y: 0,
    collected: false,
    descriptionKey: 'droneGame.parts.navAntenna.description'
  },
  {
    id: 'video-antenna',
    nameKey: 'droneGame.parts.videoAntenna.name',
    image: 'assets/images/drone-parts/video-antenna.svg',
    x: 0,
    y: 0,
    collected: false,
    descriptionKey: 'droneGame.parts.videoAntenna.description'
  }
];
