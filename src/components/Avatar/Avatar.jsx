import styles from './Avatar.module.css'

export function Avatar(props) {
  /*If the prop hasBorder is different from false that means that the component
  has border and you don't need to add anything. You only need to add if you
  want to remove the border. */
  const hasBorder = props.hasBorder !== false

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}

/* You can also destructure the props. When you destructure them you can assign
default values to it. This will work the same */
// export function Avatar({ hasBorder = true, src}) {
//   return (
//     <img
//       className={hasBorder ? styles.avatarWithBorder : styles.avatar}
//       src={src}
//     />
//   );
// }