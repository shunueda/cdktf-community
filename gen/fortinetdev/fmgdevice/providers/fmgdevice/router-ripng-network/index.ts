// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterRipngNetworkAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network#device_name RouterRipngNetworkA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network#device_vdom RouterRipngNetworkA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network#fosid RouterRipngNetworkA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network#id RouterRipngNetworkA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network#prefix RouterRipngNetworkA#prefix}
  */
  readonly prefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network fmgdevice_router_ripng_network}
*/
export class RouterRipngNetworkA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_ripng_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterRipngNetworkA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterRipngNetworkA to import
  * @param importFromId The id of the existing RouterRipngNetworkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterRipngNetworkA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_ripng_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ripng_network fmgdevice_router_ripng_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterRipngNetworkAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterRipngNetworkAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_ripng_network',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      prefix: cdktf.stringToTerraform(this._prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
