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
import { getEvents } from "../../services/eventServices";

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
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "#e0f7fa",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="xl">
						<Card sx={{ width: 1, height: 300 }}>
							<Box
								sx={{
									marginTop: 0,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
								component="form"
							>
								<Typography
									component="h1"
									variant="h2"
									align="center"
									color="text.primary"
									gutterBottom
									sx={{
										color: "#00838f",
										fontFamily: "Helvetica Neue",
										fontWeight: 1,
										alignContent: "center",
									}}
								>
									Book Events and Enjoy!!!
								</Typography>

								<Grid
									container
									direction="row"
									justifyContent="center"
									alignItems="center"
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
										sx={{ color: "#00838f", width: 300 }}
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
										sx={{ color: "#00838f", width: 300, left: 40 }}
									/>
								</Grid>
								<Button
									variant="text"
									size="large"
									endIcon={<SearchIcon />}
									sx={{ color: "#00838f", width: 200, top: 40, height: 60 }}
									onClick={handleSubmit}
								>
									Search
								</Button>
							</Box>
						</Card>
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
									<Grid item key={card.id} xs={12} sm={6} md={4}>
										<Card sx={{ maxWidth: 345 }}>
											<CardMedia
												component="img"
												height="140"
												image="https://source.unsplash.com/random"
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
																image="https://source.unsplash.com/random"
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
