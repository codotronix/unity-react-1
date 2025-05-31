# React App with Unity WebGL Build
This project demonstrates how to integrate a Unity WebGL build into a React application. The Unity build is served as a static asset and can be interacted with within the React app.

## How to run the project
- Build the Docker Image
```bash
docker build -t unity-react-1 .
```
- Run the Docker Container
```bash
docker run -p 9090:9090 unity-react-1
```
- Open your browser and navigate to `http://localhost:9090` to see the React app with the Unity WebGL build integrated.

- Or you can run the project without Docker:
```bash
npm i
npm run dev
```

## See it in action
[barick-unity-react-1.netlify.app](https://barick-unity-react-1.netlify.app/)

