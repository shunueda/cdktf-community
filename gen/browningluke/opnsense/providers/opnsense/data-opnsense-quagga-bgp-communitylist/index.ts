// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_communitylist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpnsenseQuaggaBgpCommunitylistConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_communitylist#id DataOpnsenseQuaggaBgpCommunitylist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_communitylist opnsense_quagga_bgp_communitylist}
*/
export class DataOpnsenseQuaggaBgpCommunitylist extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_quagga_bgp_communitylist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpnsenseQuaggaBgpCommunitylist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpnsenseQuaggaBgpCommunitylist to import
  * @param importFromId The id of the existing DataOpnsenseQuaggaBgpCommunitylist that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_communitylist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpnsenseQuaggaBgpCommunitylist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_quagga_bgp_communitylist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/quagga_bgp_communitylist opnsense_quagga_bgp_communitylist} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpnsenseQuaggaBgpCommunitylistConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpnsenseQuaggaBgpCommunitylistConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_quagga_bgp_communitylist',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // seq_number - computed: true, optional: false, required: false
  public get seqNumber() {
    return this.getNumberAttribute('seq_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
