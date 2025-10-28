// https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBluecatIpv6BlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 Block's CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block#cidr DataBluecatIpv6Block#cidr}
  */
  readonly cidr: string;
  /**
  * The Configuration. Getting the IPv4 Block in the default Configuration if doesn't specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block#configuration DataBluecatIpv6Block#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block#id DataBluecatIpv6Block#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Block IP version: ipv4 or ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block#ip_version DataBluecatIpv6Block#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The Block name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block#name DataBluecatIpv6Block#name}
  */
  readonly name?: string;
  /**
  * IPv4 Block's properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block#properties DataBluecatIpv6Block#properties}
  */
  readonly properties?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block bluecat_ipv6block}
*/
export class DataBluecatIpv6Block extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bluecat_ipv6block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBluecatIpv6Block resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBluecatIpv6Block to import
  * @param importFromId The id of the existing DataBluecatIpv6Block that should be imported. Refer to the {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBluecatIpv6Block to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bluecat_ipv6block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/ipv6block bluecat_ipv6block} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBluecatIpv6BlockConfig
  */
  public constructor(scope: Construct, id: string, config: DataBluecatIpv6BlockConfig) {
    super(scope, id, {
      terraformResourceType: 'bluecat_ipv6block',
      terraformGeneratorMetadata: {
        providerName: 'bluecat',
        providerVersion: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._configuration = config.configuration;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._properties = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: false, optional: true, required: false
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

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      configuration: cdktf.stringToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.stringToTerraform(this._properties),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
