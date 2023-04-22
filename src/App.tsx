import { Switch } from "@headlessui/react";
import { useState } from "react";
import Button from "./components/Button";

function App() {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="flex flex-col justify-center items-center bg-black">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? "bg-blue-600" : "bg-gray-200"
				} relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						enabled ? "translate-x-6" : "translate-x-1"
					} inline-block h-4 w-4 transform rounded-full bg-white transition`}
				/>
			</Switch>
			<Button
				intent={"secondary"}
				size="small"
				className="normal-case"
				value={"hi"}
			/>
		</div>
	);
}

export default App;
