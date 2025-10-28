// https://registry.terraform.io/providers/hetznercloud/hcloud/1.54.0/docs/data-sources/load_balancer_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudLoadBalancerTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Load Balancer Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.54.0/docs/data-sources/load_balancer_type#id DataHcloudLoadBalancerType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the Load Balancer Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.54.0/docs/data-sources/load_balancer_type#name DataHcloudLoadBalancerType#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.54.0/docs/data-sources/load_balancer_type hcloud_load_balancer_type}
*/
export class DataHcloudLoadBalancerType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_load_balancer_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudLoadBalancerType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudLoadBalancerType to import
  * @param importFromId The id of the existing DataHcloudLoadBalancerType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.54.0/docs/data-sources/load_balancer_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudLoadBalancerType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_load_balancer_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.54.0/docs/data-sources/load_balancer_type hcloud_load_balancer_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudLoadBalancerTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudLoadBalancerTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_load_balancer_type',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.54.0'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_assigned_certificates - computed: true, optional: false, required: false
  public get maxAssignedCertificates() {
    return this.getNumberAttribute('max_assigned_certificates');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_services - computed: true, optional: false, required: false
  public get maxServices() {
    return this.getNumberAttribute('max_services');
  }

  // max_targets - computed: true, optional: false, required: false
  public get maxTargets() {
    return this.getNumberAttribute('max_targets');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
