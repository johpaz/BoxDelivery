  import { Doughnut } from "react-chartjs-2";
  import { useEffect, useState } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { getAllPilotos } from "../../../services/redux/slice/pilotoSlice";
  import axios from "axios";
  import { AlertDescription, AlertTitle, Box, Flex } from "@chakra-ui/react";
  import { Alert, AlertIcon } from "@chakra-ui/react";

  //!cambios pasarela

  const DataPiloto = () => {
    const dataPiloto = useSelector((state) => state.pilotos);
    console.log(dataPiloto);
    const session = useSelector((state) => state.session);

    //const profile = dataPiloto.find((user) => user.id === session.id);
    const [formValues, setFormValues] = useState({});
    const [showAlert, setShowAlert] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
      const currentUrl = window.location.href;

      const urlParams = new URLSearchParams(currentUrl);

      // Obtén los datos que necesitas
      const collectionStatus = urlParams.get("collection_status");
      const preferenceId = urlParams.get("preference_id");

      // Aquí puedes utilizar la información como desees
      console.log("collectionStatus:", collectionStatus);
      console.log("preferenceId:", preferenceId);

      // Verifica si collectionStatus es "approved"
      if (collectionStatus === "approved") {
        // Enviar los datos al backend en un JSON mediante una solicitud POST

        axios
          .post("http:localhost:3004/premium", {
            collectionStatus: collectionStatus,
            preferenceId: preferenceId,
          })
          .then((response) => {
            console.log("Respuesta del backend:", response.data);
            // Aquí puedes manejar la respuesta del backend, si es necesario
            // window.location.href = "http://127.0.0.1:5173/dashboardPiloto";
            // "https://profinder-client.vercel.app/dashboardPiloto";
            setFormValues({});
            alert(`${message}`);
          })
          .then((response) => {
            console.log("Respuesta del backend:", response.data);
            // Aquí puedes manejar la respuesta del backend, si es necesario
            // window.location.href = "http://127.0.0.1:5173/dashboardPiloto";
            // "https://profinder-client.vercel.app/dashboardPiloto";
            setFormValues({});
            alert(`${response.data.message}`);
          })
          .catch((error) => {
            console.error("Error al enviar datos al backend:", error);
          });
      }
    }, []);

    // hay que validar que exista la propiedad si no sale undefined
  //  const numPosts = profile && profile.posts ? profile.posts.length : 0;

    const serviciosActivos = 20;
    const serviciosTerminados = 15;
    // aca van los datos de la gráfica
    // const chartData = {
    //   labels: ["Posts", "Mi Calificacion", "Feedback Recibido"],
    //   datasets: [
    //     {
    //       data: [numPosts, serviciosActivos, serviciosTerminados],
    //       backgroundColor: [
    //         "rgba(220, 30, 220, 0.6)",
    //         "rgba(192, 75, 75, 0.6)",
    //         "rgba(3, 75, 75, 0.6)",
    //       ],
    //       borderWidth: 1,
    //     },
    //   ],
    // };

    // Configurar las opciones de la gráfica
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      cutout: "50%",
    };

    //

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
      dispatch(getAllPilotos());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }, []);

    const chartWidth = windowWidth > 600 ? 600 : windowWidth - 20;
    const chartHeight = chartWidth;
    return (
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        {showAlert && dataPiloto.active === true ? (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            display="alert"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Aprobado!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              ¡Gracias por suscribirte, ahora podes disfrutar de publicaciones
              ilimitadas!
            </AlertDescription>
          </Alert>
        ) : null}
        <Box width={`${chartWidth}px`} height={`${chartHeight}px`}>
          {" "}
          {/* <Doughnut data={chartData} options={chartOptions} /> */}
        </Box>
      </Flex>
    );
  };

  export default DataPiloto;
