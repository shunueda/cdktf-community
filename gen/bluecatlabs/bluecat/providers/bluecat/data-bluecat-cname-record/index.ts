// https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBluecatCnameRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the CNAME record. Must be FQDN if the Zone is not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#canonical DataBluecatCnameRecord#canonical}
  */
  readonly canonical: string;
  /**
  * The Configuration. Getting the CNAME record in the default Configuration if doesn't specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#configuration DataBluecatCnameRecord#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#id DataBluecatCnameRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The record name that will be linked to the CNAME record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#linked_record DataBluecatCnameRecord#linked_record}
  */
  readonly linkedRecord: string;
  /**
  * CNAME record's properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#properties DataBluecatCnameRecord#properties}
  */
  readonly properties?: string;
  /**
  * The TTL value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#ttl DataBluecatCnameRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * The view which contains the details of the zone. If not provided, record will be got under default view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#view DataBluecatCnameRecord#view}
  */
  readonly view?: string;
  /**
  * The Zone in which you want to get a CNAME record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#zone DataBluecatCnameRecord#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record bluecat_cname_record}
*/
export class DataBluecatCnameRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bluecat_cname_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBluecatCnameRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBluecatCnameRecord to import
  * @param importFromId The id of the existing DataBluecatCnameRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBluecatCnameRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bluecat_cname_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/cname_record bluecat_cname_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBluecatCnameRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataBluecatCnameRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'bluecat_cname_record',
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
    this._canonical = config.canonical;
    this._configuration = config.configuration;
    this._id = config.id;
    this._linkedRecord = config.linkedRecord;
    this._properties = config.properties;
    this._ttl = config.ttl;
    this._view = config.view;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical - computed: false, optional: false, required: true
  private _canonical?: string; 
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
  public set canonical(value: string) {
    this._canonical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical;
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

  // linked_record - computed: false, optional: false, required: true
  private _linkedRecord?: string; 
  public get linkedRecord() {
    return this.getStringAttribute('linked_record');
  }
  public set linkedRecord(value: string) {
    this._linkedRecord = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRecordInput() {
    return this._linkedRecord;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonical: cdktf.stringToTerraform(this._canonical),
      configuration: cdktf.stringToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      linked_record: cdktf.stringToTerraform(this._linkedRecord),
      properties: cdktf.stringToTerraform(this._properties),
      ttl: cdktf.numberToTerraform(this._ttl),
      view: cdktf.stringToTerraform(this._view),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonical: {
        value: cdktf.stringToHclTerraform(this._canonical),
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
      linked_record: {
        value: cdktf.stringToHclTerraform(this._linkedRecord),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
