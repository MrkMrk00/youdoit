import type { FunctionComponent } from 'react'
import { useMemo } from 'react'
import { useCountdownControl } from 'use-countdown-control'
import styles from './Timer.module.sass'

export type TimerProps = {
	startButtonTitle: string
	secondsToSet: number
}

export const Timer: FunctionComponent<TimerProps> = ({ startButtonTitle, secondsToSet }) => {
	const { start, pause, resume, stop, time, isRunning } = useCountdownControl(secondsToSet)

	const niceTime = useMemo(() => {
		const p = (number: number) => number.toString().padStart(2, '0')
		return `${p(time.days)}:${p(time.hours)}:${p(time.minutes)}:${p(time.seconds)}`
	}, [time])

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<time className={styles.time}>{niceTime}</time>
				<div className={styles.buttons}>
					<button type="button" className={styles.button} onClick={() => start(parseInt(secondsToSet.toString(), 10))}>
						{startButtonTitle}
					</button>
					<button
						type="button"
						onClick={() => {
							if (isRunning) {
								pause()
							} else {
								resume()
							}
						}}
						className={styles.button}
						disabled={time.secondsTotal === 0}
					>
						{isRunning ? 'Pause' : 'Resume'}
					</button>

					<button
						type="button"
						onClick={() => {
							stop()
						}}
						className={styles.button}
						disabled={time.secondsTotal === 0}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	)
}
