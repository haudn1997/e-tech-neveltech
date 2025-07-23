import { useState, useEffect } from 'react';
import SectionHeaderWithControls from './section-header-with-controls';


export interface CarouselItem {
	image: string;
	link?: string;
	description?: string;
}

export interface CarouselProps {
	items?: CarouselItem[];
	title?: string;
	autoPlay?: boolean;
	autoPlayDelay?: number;
	showDots?: boolean;
	showProgressBar?: boolean;
	className?: string;
	size: {
		width?: number;
		height?: number
	},
	isShowArrows?: boolean;
	objectFit?: 'cover' | 'contain';
}

const CommonCarousel = (props: CarouselProps) => {
	const { autoPlay, autoPlayDelay, items, title, showDots, showProgressBar, className, isShowArrows, objectFit = 'cover' } = props;
	const [currentSlide, setCurrentSlide] = useState(0);


	useEffect(() => {
		if (autoPlay && items.length > 1) {
			const interval = setInterval(() => {
				handleNext();
			}, autoPlayDelay);
			return () => clearInterval(interval);
		}
	}, [autoPlay, autoPlayDelay, currentSlide, items.length]);

	const handleNext = () => {
		const nextIndex = (currentSlide + 1) % items.length;
		setCurrentSlide(nextIndex);
	};

	const handlePrev = () => {
		const prevIndex = (currentSlide - 1 + items.length) % items.length;
		setCurrentSlide(prevIndex);
	};

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	if (!items.length) {
		return (
			<div className="w-full h-full max-w-6xl mx-auto bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8">
				<div className="text-center text-gray-400">
					<p>No items to display</p>
				</div>
			</div>
		);
	}

	return (
		<div className='w-full relative'>
			{
				title && <SectionHeaderWithControls title={title} onNext={handlePrev} onPrev={handlePrev} isShowArrows={isShowArrows} />
			}

			{/* Main Content */}
			<div 
				className={`bg-card overflow-hidden w-full ${className}`}
				style={{ height: props.size.height ? `${props.size.height}px` : 'auto' }}
			>
				<div
					className="flex transition-transform duration-500 ease-in-out h-full"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{items.map((item, index) => (
						<div key={index} className="w-full flex-shrink-0 relative h-full">
							<img className={`object-${objectFit} w-full h-full`} src={item.image} alt={title} />
							<div className="relative z-10 h-full flex items-center px-8">
								<div className="flex-1 space-y-6">
									{item.description && (
										<p className="text-gray-400 text-lg max-w-md leading-relaxed">
											{item.description}
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{showDots && items.length > 1 && (
				<div className="absolute z-10 -bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center space-x-1 md:space-x-3 py-3 bg-black bg-opacity-20 w-[176px] md:w-auto px-2 rounded-md">
					{items.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-4 md:w-8 h-1 rounded-xl transition-all duration-300 ${currentSlide === index
								? 'bg-z-yellow'
								: 'bg-white bg-opacity-30 hover:bg-opacity-50'
								}`}
						/>
					))}
				</div>
			)}

			{showProgressBar && items.length > 1 && (
				<div className="h-1 bg-black bg-opacity-30">
					<div
						className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500"
						style={{ width: `${((currentSlide + 1) / items.length) * 100}%` }}
					/>
				</div>
			)}
		</div>
	);
};

export default CommonCarousel;