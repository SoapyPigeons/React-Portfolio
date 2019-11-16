import React from "react";
import profilePicture from "../../../static/assets/images/bio/about-image.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget
        nunc scelerisque viverra mauris in aliquam. Praesent tristique magna sit
        amet purus. Id leo in vitae turpis massa sed elementum tempus egestas.
        Sed viverra tellus in hac habitasse platea dictumst. Varius sit amet
        mattis vulputate. Id nibh tortor id aliquet lectus proin. Cursus vitae
        congue mauris rhoncus aenean vel elit. Risus viverra adipiscing at in
        tellus. Amet consectetur adipiscing elit ut aliquam purus sit. Arcu dui
        vivamus arcu felis bibendum ut. Tincidunt vitae semper quis lectus.
        Consectetur adipiscing elit duis tristique sollicitudin. Fermentum leo
        vel orci porta non pulvinar neque laoreet suspendisse. Bibendum at
        varius vel pharetra vel turpis nunc eget lorem. Neque viverra justo nec
        ultrices. Condimentum lacinia quis vel eros donec ac odio tempor orci.
        Fermentum iaculis eu non diam phasellus vestibulum. Id neque aliquam
        vestibulum morbi blandit cursus. Commodo elit at imperdiet dui accumsan
        sit.
      </div>
    </div>
  );
}
