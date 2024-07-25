import React, { useState, useRef, useEffect } from "react";
import CenterLayout from "../layout/CenterLayout";
import { addImage } from "../../state/images/imagesSlice";
import { useDispatch } from "react-redux";
import Gallery from "../gallery/Gallery";
import useQueue from "../hooks/useQueue";
function Prompt() {
	const [query, setQuery] = useState("");
	const ws = useRef(null);
	const url = `wss://stable-diffusion.qura.law/generate?token=${process.env.REACT_APP_API_KEY}`;
	const dispatch = useDispatch();
	const [isGenerating, setIsGenerating] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const { queue, enqueue, dequeue } = useQueue();

	useEffect(() => {
		if (!isGenerating && queue.length > 0) {
			processRequest(queue[0]);
		}
	}, [queue, isGenerating]);

	async function openSocketConnect() {
		if (!ws.current || ws.current.readyState !== WebSocket.OPEN) {
			ws.current = new WebSocket(url);

			return new Promise((resolve, reject) => {
				ws.current.onopen = () => {
					resolve();
				};

				ws.current.onerror = (error) => {
					setErrorMessage({ code: "-", message: "WebSocket Error" });
					reject(error);
				};

				ws.current.onmessage = (event) => {
					const data = JSON.parse(event.data);
					if (data.completed) {
						dispatch(addImage({ query, image: data.image }));
					}
				};

				ws.current.onclose = (event) => {
					const response = JSON.parse(event.reason);
					const code = response.code;
					const message = response.message;
					setIsGenerating(false);

					if (code !== 200) {
						setErrorMessage({ code: code, message: message });
					} else {
						setErrorMessage(null);
					}
					dequeue();
				};
			});
		} else {
			return Promise.resolve();
		}
	}

	async function processRequest(requestData) {
		try {
			await openSocketConnect();
			if (ws.current.readyState === WebSocket.OPEN) {
				ws.current.send(JSON.stringify(requestData));
				setIsGenerating(true);
			}
		} catch (error) {
			console.error("Failed to connect to WebSocket:", error);
			setIsGenerating(false);
			dequeue();
		}
	}
	const handleSubmit = async (event) => {
		event.preventDefault();

		const validationMessage = validateQuery(query);
		if (validationMessage) {
			setErrorMessage({ code: "", message: validationMessage });
			return;
		} else {
			setErrorMessage(null);
		}
		const requestData = {
			prompt: query,
			image_size: [1024, 1024],
			steps: 150,
		};
		enqueue(requestData);
		setQuery("");
	};

	function validateQuery(query) {
		if (!query.trim()) {
			return "Query cannot be empty.";
		}
		if (query.length < 10) {
			return "Query must be at least 10 characters long.";
		}
		if (query.length > 100) {
			return "Query must not exceed 100 characters.";
		}
		return null;
	}

	return (
		<div className=''>
			<div className='w-full'>
				<CenterLayout>
					<form onSubmit={handleSubmit} className='w-full'>
						<div className='my-24 flex flex-col gap-12'>
							<div className='text-black lg:text-6xl md:text-4xl text-3xl font-bold'>
								Generate Your Images Instantly with Advanced Queries
							</div>
							<textarea
								className='bg-gray-50 p-8 rounded-md'
								placeholder='Enter your query here'
								rows='5'
								cols='50'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
							<button
								disabled={!query.trim() || isGenerating}
								type='submit'
								className={`mt-4 px-4 py-2 rounded-md text-white transition-all duration-150 ease-in-out ${
									isGenerating || !query.trim()
										? "bg-blue-300 cursor-not-allowed"
										: "bg-blue-500 hover:bg-blue-600"
								}`}
							>
								{isGenerating ? "Generating, please wait..." : "Submit Query"}
							</button>

							{errorMessage && (
								<p className='text-red-400 font-bold'>
									Error {errorMessage.code}: {errorMessage.message}
								</p>
							)}
						</div>
						<Gallery />
					</form>
				</CenterLayout>
			</div>
		</div>
	);
}

export default Prompt;
