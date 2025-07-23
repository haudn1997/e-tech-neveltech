import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"

export interface SectionHeaderWithControlsProps {
	title: string;
	onPrev?: () => void;
	onNext?: () => void;
	isShowArrows?: boolean;
}


const SectionHeaderWithControls = (props: SectionHeaderWithControlsProps) => {
	return <div className="flex items-center justify-between mb-6">
		<h2 className="font-[900] text-[24px] sm:text-[32px] italic text-z-yellow flex items-center uppercase">
			{props.title}
		</h2>

		{props.isShowArrows && <div className="flex items-center space-x-2">
			<Button onClick={() => {
				props.onPrev?.();
			}} variant="ghost" size="sm" className="p-2 h-8 w-8 bg-secondary hover:bg-secondary/80 rounded-[12px]">
				<ChevronLeft className="h-4 w-4" />
			</Button>
			<Button onClick={() => {
				props.onNext?.();
			}} variant="ghost" size="sm" className="p-2 h-8 w-8 bg-secondary hover:bg-secondary/80 rounded-[12px]">
				<ChevronRight className="h-4 w-4" />
			</Button>
		</div>}
	</div>
}

export default SectionHeaderWithControls;

