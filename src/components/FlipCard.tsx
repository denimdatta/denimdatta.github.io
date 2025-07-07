interface FlipCardProps {
	id: string;
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({id, frontContent, backContent}) => {
	return (
		<div key={id} className="group h-96 [perspective:1000px]">
			<div className="flip-card-wrapper">
				{/* Front Face */}
				<div className="flip-card-front grid">
					<div className="flex min-h-full flex-col">
						{frontContent}
					</div>
				</div>
				{/* Back Face */}
				<div className="flip-card-back">
					<div className="flex min-h-full flex-row">
						{backContent}
					</div>
				</div>
			</div>
		</div>
	)
};

export default FlipCard;
