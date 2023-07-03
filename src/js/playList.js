const playListContainer = document.querySelector('.play-list');

const playList = [
  {
    title: 'Aqua Caelestis',
    src: '/sounds/Aqua Caelestis.mp3',
    duration: '00:39',
  },
  {
    title: 'Ennio Morricone',
    src: '/sounds/Ennio Morricone.mp3',
    duration: '01:37',
  },
  {
    title: 'River Flows In You',
    src: '/sounds/River Flows In You.mp3',
    duration: '01:37',
  },
  {
    title: 'Summer Wind',
    src: '/sounds/Summer Wind.mp3',
    duration: '01:50',
  },
  {
    title: 'Linkin Park - Lost',
    src: 'https://mp3uks.ru/mp3/files/linkin-park-lost-mp3.mp3',
    duration: '03:19',
  },
];

playList.forEach((el) => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListContainer.append(li);
});

export default playList;
