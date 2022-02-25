import { fireEvent } from "./fireEvent"
import { getParcel } from '@decentraland/ParcelIdentity'


export const registerDclEvents = async () => {

    let enterTime = 0.0
    let connectionTime = 0.0

    const parcel = await getParcel()
    const { cid: parcelId } = parcel
    const baseParcel = parcel.land.sceneJsonData.scene.base

    onEnterSceneObservable.add(async (player) => {
        enterTime = Date.now()
        fireEvent('enterLand',{parcelId, baseParcel})
    })

    onLeaveSceneObservable.add((player) => {
        const duration = Math.floor(Date.now() - enterTime)
        fireEvent('visitDuration', {parcelId, baseParcel, duration})
    })

    onPlayerConnectedObservable.add((player) => {
        connectionTime = Date.now()
        fireEvent('connectLand',{parcelId, baseParcel})
    })

    onPlayerDisconnectedObservable.add((player) => {
        const duration = Math.floor(Date.now() - connectionTime)
        fireEvent('connectionDuration', {parcelId, baseParcel, duration})
    })
}
