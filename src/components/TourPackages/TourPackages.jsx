import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tour from "./tour";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Snackbar from "@mui/material/Snackbar";
const theme = createTheme();
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 800,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
export default function Album() {
	const navigate = useNavigate();
	const [tour, setTour] = useState([]);
	useEffect(() => {
		setTour(Tour);
	});
	const [open, setOpen] = React.useState(false);

	const [openSnack, setOpenSnack] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setOpenSnack(false);
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<Container sx={{ py: 8 }} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{tour.map((card) => (
							<Grid item key={card.id}>
								<Card
									sx={{
										display: "flex",
										width: 800,
										height: 320,
										color: "#00838f",
									}}
								>
									<Box sx={{ display: "flex", flexDirection: "column" }}>
										<CardContent sx={{ flex: "1 0 auto" }}>
											<Typography component="div" variant="h5">
												{card.destination}
											</Typography>
											<Typography
												variant="subtitle1"
												color="text.secondary"
												component="div"
												sx={{ color: "#00838f" }}
											>
												{card.days} Days
											</Typography>
											<Typography paragraph sx={{ mt: 5 }}>
												{card.description}
											</Typography>
											<Typography
												color="text.secondary"
												variant="h5"
												sx={{ color: "#00838f" }}
											>
												{card.price}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												size="large"
												onClick={handleOpen}
												sx={{ color: "#00838f", left: 400 }}
											>
												Learn More
											</Button>
										</CardActions>
									</Box>
									<CardMedia
										component="img"
										sx={{ width: 200 }}
										image="https://source.unsplash.com/random"
										alt="Live from space album cover"
									/>
								</Card>
								<div>
									<Modal
										aria-labelledby="transition-modal-title"
										aria-describedby="transition-modal-description"
										open={open}
										onClose={handleClose}
										closeAfterTransition
										BackdropComponent={Backdrop}
										BackdropProps={{
											timeout: 500,
										}}
									>
										<Fade in={open}>
											<Box sx={style}>
												<Card sx={{ minWidth: 600 }}>
													<CardMedia
														component="img"
														image="https://source.unsplash.com/random"
														alt="party"
														sx={{ maxHeight: 120 }}
													/>
													<CardContent>
														<Typography
															gutterBottom
															variant="h5"
															component="div"
															sx={{ color: "#00838f" }}
														>
															<LocationOnIcon /> {card.destination}
														</Typography>
														<Typography
															variant="body2"
															color="text.secondary"
															sx={{ mt: 2, color: "#00838f" }}
														>
															<DateRangeIcon /> {card.days} Days
														</Typography>
														<Typography
															variant="body2"
															color="text.secondary"
															sx={{ mt: 2, color: "#00838f" }}
														>
															{card.price}
														</Typography>
														<Typography
															variant="subtitle1"
															color="text.secondary"
															sx={{ mt: 2, color: "#00838f" }}
														>
															Hotel : {card.hotel_name}
														</Typography>

														<Typography
															paragraph
															sx={{ mt: 2, color: "#00838f" }}
														>
															{card.hotel_description}
														</Typography>
														<Typography
															variant="subtitle1"
															color="text.secondary"
															sx={{ mt: 2, color: "#00838f" }}
														>
															{card.trans_mode} : {card.trans_name}
														</Typography>
														<Typography
															paragraph
															sx={{ mt: 2, color: "#00838f" }}
														>
															Departure - {card.trans_departure_destination} :{" "}
															{card.trans_departure}
														</Typography>
														<Typography
															paragraph
															sx={{ mt: 2, color: "#00838f" }}
														>
															Arrival - {card.trans_arrival_destination} :{" "}
															{card.trans_arrival}
														</Typography>
													</CardContent>
													<CardActions>
														<FavoriteIcon
															sx={{ color: "#00838f" }}
															onClick={() => {
																setOpenSnack(true);
															}}
														/>
														<Snackbar
															open={openSnack}
															autoHideDuration={100}
															message="Added to wishList"
														/>
														<Button
															size="small"
															onClick={() => {
																navigate("/tour-booking");
															}}
															sx={{ color: "#00838f", ml: 70 }}
														>
															Book
														</Button>
													</CardActions>
												</Card>
											</Box>
										</Fade>
									</Modal>
								</div>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
