import cv2
import difflib
import math

# Load the shape predictor model for detecting facial landmarks
shape_predictor_path = 'shape_predictor_68_face_landmarks.dat'  # Path to the shape predictor model
detector = difflib.get_frontal_face_detector()
predictor = difflib.shape_predictor(shape_predictor_path)

# Constants for mouth detection
MOUTH_START = 48
MOUTH_END = 67
THRESHOLD_DISTANCE = 30  # Minimum distance threshold in pixels to consider the mouth opened

# Function to calculate the distance between two points
def calculate_distance(pt1, pt2):
    x1, y1 = pt1
    x2, y2 = pt2
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# Function to apply the mouth recognition and effect
def apply_mouth_recognition(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = detector(gray)

    for face in faces:
        landmarks = predictor(gray, face)
        mouth_start = (landmarks.part(MOUTH_START).x, landmarks.part(MOUTH_START).y)
        mouth_end = (landmarks.part(MOUTH_END).x, landmarks.part(MOUTH_END).y)
        cv2.circle(frame, mouth_start, 3, (0, 0, 255), -1)  # Draw red dot at the start of the mouth
        cv2.circle(frame, mouth_end, 3, (0, 0, 255), -1)  # Draw red dot at the end of the mouth

        distance = calculate_distance(mouth_start, mouth_end)
        if distance > THRESHOLD_DISTANCE:
            # Apply filter effect when mouth is opened wider than the threshold
            cv2.putText(frame, 'Mouth Opened', (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    return frame

# Main function for real-time mouth recognition
def main():
    video_capture = cv2.VideoCapture(0)

    while True:
        ret, frame = video_capture.read()
        if not ret:
            break

        frame = apply_mouth_recognition(frame)
        cv2.imshow('Mouth Recognition', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    video_capture.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()
