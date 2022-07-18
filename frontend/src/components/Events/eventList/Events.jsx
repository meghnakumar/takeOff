import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Snackbar from "@mui/material/Snackbar";
import { getEvents } from "../../../services/eventServices";
import "../Events.scss";
const theme = createTheme();
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function Events() {
	const navigate = useNavigate();
	const [datePicker, setdatePricker] = useState("");
	const [error, setError] = useState("");
	const [search, setSearch] = useState({
		city: "",
		date: "",
	});
	const [city, setCity] = useState("");
	const [events, setEvents] = useState([]);
	useEffect(() => {
		getEvents()
			.then((result) => {
				setEvents(result.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (city === "") {
			setError("City is empty");
		} else if (!/^[A-Za-z]+$/.test(city)) {
			setError("City is not valid");
		}
		if (!error) {
			const search = {
				city: city,
				date: datePicker,
			};
			setSearch(search);
		} else {
			alert(error);
		}
	};
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
				<Box
					sx={{
						backgroundImage: "linear-gradient(315deg, #54d6f1 0%, #056e83 74%)",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="lg">
						<Grid container spacing={4}>
							<Card sx={{ width: "100%", height: 300, display: "flex" }}>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<CardContent sx={{ flex: "1 0 auto" }}>
										<Typography
											component="div"
											variant="h2"
											sx={{
												color: "#00838f",
												fontFamily: "Helvetica Neue",
												fontWeight: 2,
												fontSize: "46px",
											}}
										>
											Explore events around Canada...
										</Typography>
										<Typography
											variant="subtitle1"
											color="text.secondary"
											component="div"
										>
											<TextField
												margin="normal"
												name="City"
												label="City"
												type="text"
												id="City"
												onChange={(e) => {
													setCity(e.target.value);
												}}
												sx={{ color: "#00838f", width: 300, top: 40 }}
											/>

											<TextField
												margin="normal"
												name="Date"
												label="Date"
												type="date"
												id="Date"
												defaultValue={new Date().toISOString().split("T")[0]}
												onChange={(e) => {
													setdatePricker(e.target.value);
												}}
												sx={{ color: "#00838f", width: 300, left: 40, top: 40 }}
											/>
										</Typography>
										<CardActions>
											<Button
												variant="text"
												size="large"
												endIcon={<SearchIcon />}
												sx={{
													color: "#00838f",
													width: 200,
													top: 40,
													height: 60,
													left: "35%",
												}}
												onClick={handleSubmit}
											>
												Search
											</Button>
										</CardActions>
									</CardContent>
								</Box>
								<CardMedia
									component="img"
									sx={{ width: "41%" }}
									image="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"
									alt="Live from space album cover"
								/>
							</Card>
						</Grid>
					</Container>
				</Box>

				<Container sx={{ py: 8 }} maxWidth="lg">
					{/* End hero unit */}
					<Grid container spacing={4}>
						<>
							{events
								.filter((card) => {
									if (!search.city || !search.date) {
										return card;
									} else if (
										card.city.toLowerCase() === search.city.toLowerCase() &&
										card.date === search.date
									) {
										return card;
									}
								})
								.map((card) => (
									<Grid item key={card._id} xs={12} sm={6} md={4}>
										<Card sx={{ maxWidth: 345 }}>
											<CardMedia
												component="img"
												height="140"
												image="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?cs=srgb&dl=pexels-sebastian-ervi-1763067.jpg&fm=jpg"
												alt="event images"
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
													sx={{ color: "#00838f" }}
												>
													{card.title}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
													sx={{ color: "#00838f" }}
												>
													<LocationOnIcon /> {card.city}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
													sx={{ color: "#00838f" }}
												>
													<DateRangeIcon /> {card.date}
												</Typography>
											</CardContent>
											<CardActions>
												<Button
													size="small"
													onClick={handleOpen}
													sx={{ color: "#00838f" }}
												>
													Learn More
												</Button>
											</CardActions>
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
														<Card sx={{ maxWidth: 345 }}>
															<CardMedia
																component="img"
																maxHeight="100"
																image="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?cs=srgb&dl=pexels-sebastian-ervi-1763067.jpg&fm=jpg"
																alt="party"
																sx={{ maxHeight: 200 }}
															/>
															<CardContent>
																<Typography
																	gutterBottom
																	variant="h5"
																	component="div"
																	sx={{ color: "#00838f" }}
																>
																	{card.destination}
																</Typography>
																<Typography
																	variant="body2"
																	color="text.secondary"
																	sx={{ mt: 2, color: "#00838f" }}
																>
																	<DateRangeIcon />
																	{card.date}
																</Typography>
																<Typography
																	variant="body2"
																	color="text.secondary"
																	sx={{ mt: 2, color: "#00838f" }}
																>
																	<LocationOnIcon />
																	{card.addressLine1}, {card.city}, {card.state}
																</Typography>
																<Typography
																	variant="body2"
																	color="text.secondary"
																	sx={{ mt: 2, color: "#00838f" }}
																>
																	Seats : {card.seats}
																</Typography>
																<Typography
																	paragraph
																	sx={{ mt: 2, color: "#00838f" }}
																>
																	{card.details}
																</Typography>
																<Typography
																	paragraph
																	sx={{ mt: 2, color: "#00838f" }}
																>
																	Price : ${card.price}
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
																		navigate("/events-booking", {
																			state: {
																				eventId: card._id,
																				title: card.title,
																				city: card.city,
																				date: card.date,
																				price: card.price,
																			},
																		});
																	}}
																	sx={{ color: "#00838f", ml: 25 }}
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
						</>
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
