const template = document.createElement("template");

template.innerHTML = `

    <style>
    .no-style {
        text-decoration: none;
        color: black;
      }

    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
      }
      
      .navbar_item {
        display: inline-block;
        position: relative;
        margin-right: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: xx-large;
        color: white;
      }
      
      .navbar_item::after {
        content: "";
        width: 100%;
        position: absolute;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: gray;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      
      .navbar_item:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }

    </style>

    <div class="navbar">
        <div class="navbar_item"><a class="no-style">Home</a></div>
        <div class="navbar_item"><a class="no-style" href="About.html">About</a></div>
        <div class="navbar_item">Project</div>
        <div class="navbar_item">Resume</div>
    </div>
`;

document.body.insertBefore(
  template.content,
  document.getElementById("content")
);
