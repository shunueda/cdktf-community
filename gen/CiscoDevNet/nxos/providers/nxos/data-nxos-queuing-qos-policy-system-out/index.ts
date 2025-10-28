// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_system_out
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosQueuingQosPolicySystemOutConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_system_out#device DataNxosQueuingQosPolicySystemOut#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_system_out nxos_queuing_qos_policy_system_out}
*/
export class DataNxosQueuingQosPolicySystemOut extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_queuing_qos_policy_system_out";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosQueuingQosPolicySystemOut resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosQueuingQosPolicySystemOut to import
  * @param importFromId The id of the existing DataNxosQueuingQosPolicySystemOut that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_system_out#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosQueuingQosPolicySystemOut to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_queuing_qos_policy_system_out", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_system_out nxos_queuing_qos_policy_system_out} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosQueuingQosPolicySystemOutConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNxosQueuingQosPolicySystemOutConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nxos_queuing_qos_policy_system_out',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
