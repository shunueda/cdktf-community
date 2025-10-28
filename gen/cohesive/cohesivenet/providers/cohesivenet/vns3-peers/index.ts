// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3PeersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#id Vns3Peers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#last_updated Vns3Peers#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#peer Vns3Peers#peer}
  */
  readonly peer?: Vns3PeersPeer[] | cdktf.IResolvable;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#vns3 Vns3Peers#vns3}
  */
  readonly vns3?: Vns3PeersVns3;
}
export interface Vns3PeersPeer {
  /**
  * IP address or DNS name of remote peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#address Vns3Peers#address}
  */
  readonly address: string;
  /**
  * MTU overide for peering link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#overlay_mtu Vns3Peers#overlay_mtu}
  */
  readonly overlayMtu?: number;
  /**
  * Peer id in topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#peer_id Vns3Peers#peer_id}
  */
  readonly peerId: number;
}

export function vns3PeersPeerToTerraform(struct?: Vns3PeersPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    overlay_mtu: cdktf.numberToTerraform(struct!.overlayMtu),
    peer_id: cdktf.numberToTerraform(struct!.peerId),
  }
}


export function vns3PeersPeerToHclTerraform(struct?: Vns3PeersPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_mtu: {
      value: cdktf.numberToHclTerraform(struct!.overlayMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_id: {
      value: cdktf.numberToHclTerraform(struct!.peerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3PeersPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Vns3PeersPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._overlayMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayMtu = this._overlayMtu;
    }
    if (this._peerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerId = this._peerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3PeersPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._overlayMtu = undefined;
      this._peerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._overlayMtu = value.overlayMtu;
      this._peerId = value.peerId;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // overlay_mtu - computed: false, optional: true, required: false
  private _overlayMtu?: number; 
  public get overlayMtu() {
    return this.getNumberAttribute('overlay_mtu');
  }
  public set overlayMtu(value: number) {
    this._overlayMtu = value;
  }
  public resetOverlayMtu() {
    this._overlayMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayMtuInput() {
    return this._overlayMtu;
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId?: number; 
  public get peerId() {
    return this.getNumberAttribute('peer_id');
  }
  public set peerId(value: number) {
    this._peerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }
}

export class Vns3PeersPeerList extends cdktf.ComplexList {
  public internalValue? : Vns3PeersPeer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Vns3PeersPeerOutputReference {
    return new Vns3PeersPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Vns3PeersVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#api_token Vns3Peers#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#host Vns3Peers#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#password Vns3Peers#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#timeout Vns3Peers#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#username Vns3Peers#username}
  */
  readonly username?: string;
}

export function vns3PeersVns3ToTerraform(struct?: Vns3PeersVns3OutputReference | Vns3PeersVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vns3PeersVns3ToHclTerraform(struct?: Vns3PeersVns3OutputReference | Vns3PeersVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3PeersVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3PeersVns3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3PeersVns3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._host = undefined;
      this._password = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._host = value.host;
      this._password = value.password;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers cohesivenet_vns3_peers}
*/
export class Vns3Peers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_peers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3Peers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3Peers to import
  * @param importFromId The id of the existing Vns3Peers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3Peers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_peers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_peers cohesivenet_vns3_peers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3PeersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Vns3PeersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_peers',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._peer.internalValue = config.peer;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // peer - computed: false, optional: true, required: false
  private _peer = new Vns3PeersPeerList(this, "peer", true);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: Vns3PeersPeer[] | cdktf.IResolvable) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3PeersVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3PeersVns3) {
    this._vns3.internalValue = value;
  }
  public resetVns3() {
    this._vns3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      peer: cdktf.listMapper(vns3PeersPeerToTerraform, true)(this._peer.internalValue),
      vns3: vns3PeersVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer: {
        value: cdktf.listMapperHcl(vns3PeersPeerToHclTerraform, true)(this._peer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3PeersPeerList",
      },
      vns3: {
        value: vns3PeersVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3PeersVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
