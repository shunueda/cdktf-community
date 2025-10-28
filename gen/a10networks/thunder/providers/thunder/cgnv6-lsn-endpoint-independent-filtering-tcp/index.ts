// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnEndpointIndependentFilteringTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp#id Cgnv6LsnEndpointIndependentFilteringTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limit number of EIF sessions that can be created per port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp#session_limit Cgnv6LsnEndpointIndependentFilteringTcp#session_limit}
  */
  readonly sessionLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp#uuid Cgnv6LsnEndpointIndependentFilteringTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp#port_list Cgnv6LsnEndpointIndependentFilteringTcp#port_list}
  */
  readonly portList?: Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct[] | cdktf.IResolvable;
}
export interface Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct {
  /**
  * Single Destination Port or Port Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp#port Cgnv6LsnEndpointIndependentFilteringTcp#port}
  */
  readonly port?: number;
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp#port_end Cgnv6LsnEndpointIndependentFilteringTcp#port_end}
  */
  readonly portEnd?: number;
}

export function cgnv6LsnEndpointIndependentFilteringTcpPortListStructToTerraform(struct?: Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_end: cdktf.numberToTerraform(struct!.portEnd),
  }
}


export function cgnv6LsnEndpointIndependentFilteringTcpPortListStructToHclTerraform(struct?: Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_end: {
      value: cdktf.numberToHclTerraform(struct!.portEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnEndpointIndependentFilteringTcpPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEnd = this._portEnd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._portEnd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._portEnd = value.portEnd;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_end - computed: false, optional: true, required: false
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  public resetPortEnd() {
    this._portEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }
}

export class Cgnv6LsnEndpointIndependentFilteringTcpPortListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnEndpointIndependentFilteringTcpPortListStructOutputReference {
    return new Cgnv6LsnEndpointIndependentFilteringTcpPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp thunder_cgnv6_lsn_endpoint_independent_filtering_tcp}
*/
export class Cgnv6LsnEndpointIndependentFilteringTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_endpoint_independent_filtering_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnEndpointIndependentFilteringTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnEndpointIndependentFilteringTcp to import
  * @param importFromId The id of the existing Cgnv6LsnEndpointIndependentFilteringTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnEndpointIndependentFilteringTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_endpoint_independent_filtering_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_endpoint_independent_filtering_tcp thunder_cgnv6_lsn_endpoint_independent_filtering_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnEndpointIndependentFilteringTcpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnEndpointIndependentFilteringTcpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_endpoint_independent_filtering_tcp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._sessionLimit = config.sessionLimit;
    this._uuid = config.uuid;
    this._portList.internalValue = config.portList;
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

  // session_limit - computed: false, optional: true, required: false
  private _sessionLimit?: number; 
  public get sessionLimit() {
    return this.getNumberAttribute('session_limit');
  }
  public set sessionLimit(value: number) {
    this._sessionLimit = value;
  }
  public resetSessionLimit() {
    this._sessionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLimitInput() {
    return this._sessionLimit;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new Cgnv6LsnEndpointIndependentFilteringTcpPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: Cgnv6LsnEndpointIndependentFilteringTcpPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      session_limit: cdktf.numberToTerraform(this._sessionLimit),
      uuid: cdktf.stringToTerraform(this._uuid),
      port_list: cdktf.listMapper(cgnv6LsnEndpointIndependentFilteringTcpPortListStructToTerraform, true)(this._portList.internalValue),
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
      session_limit: {
        value: cdktf.numberToHclTerraform(this._sessionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_list: {
        value: cdktf.listMapperHcl(cgnv6LsnEndpointIndependentFilteringTcpPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnEndpointIndependentFilteringTcpPortListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
