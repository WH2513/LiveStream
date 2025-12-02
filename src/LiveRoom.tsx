import {
  StreamVideoClient,
  StreamVideo,
  type User,
  StreamCall,
} from "@stream-io/video-react-sdk";
import { ParticipantView, useCallStateHooks } from "@stream-io/video-react-sdk";
// import "@stream-io/video-react-sdk/dist/css/styles.css";

const apiKey = "mmhfdzb5evj2";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1RocmlsbGluZ19JbnRlbGxpZ2VuY2UiLCJ1c2VyX2lkIjoiVGhyaWxsaW5nX0ludGVsbGlnZW5jZSIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzY0NzA1MDAyLCJleHAiOjE3NjUzMDk4MDJ9.gsagROWVs1mg-4Zun_D54iVmtU-mmpowimNeWiNQdpM";
const userId = "Thrilling_Intelligence";
const callId = "rICCgd8eRV0kw6Pjw0SWS";

const user: User = { id: userId, name: "WH" };
const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("livestream", callId);
call.join({ create: true });

export default function LiveRoom() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LivestreamView />
      </StreamCall>
    </StreamVideo>
  );
}

const LivestreamView = () => {
  const {
    useCameraState,
    useMicrophoneState,
    useParticipantCount,
    useIsCallLive,
    useParticipants,
  } = useCallStateHooks();

  const { camera: cam, isEnabled: isCamEnabled } = useCameraState();
  const { microphone: mic, isEnabled: isMicEnabled } = useMicrophoneState();

  const participantCount = useParticipantCount();
  const isLive = useIsCallLive();

  const [firstParticipant] = useParticipants();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <h1>Live Room</h1>
      <div>{isLive ? `Live: ${participantCount}` : `In Backstage`}</div>
      {firstParticipant ? (
        <ParticipantView participant={firstParticipant} />
      ) : (
        <div>The host hasn't joined yet</div>
      )}
      <div style={{ display: "flex", gap: "4px" }}>
        <button onClick={() => (isLive ? call.stopLive() : call.goLive())}>
          {isLive ? "Stop Live" : "Go Live"}
        </button>
        <button onClick={() => cam.toggle()}>
          {isCamEnabled ? "Disable camera" : "Enable camera"}
        </button>
        <button onClick={() => mic.toggle()}>
          {isMicEnabled ? "Mute Mic" : "Unmute Mic"}
        </button>
      </div>
    </div>
  );
};