// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name for the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_zone#domain DataBunnynetDnsZone#domain}
  */
  readonly domain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_zone bunnynet_dns_zone}
*/
export class DataBunnynetDnsZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetDnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetDnsZone to import
  * @param importFromId The id of the existing DataBunnynetDnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetDnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_zone bunnynet_dns_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // log_anonymized - computed: true, optional: false, required: false
  public get logAnonymized() {
    return this.getBooleanAttribute('log_anonymized');
  }

  // log_anonymized_style - computed: true, optional: false, required: false
  public get logAnonymizedStyle() {
    return this.getStringAttribute('log_anonymized_style');
  }

  // log_enabled - computed: true, optional: false, required: false
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }

  // nameserver1 - computed: true, optional: false, required: false
  public get nameserver1() {
    return this.getStringAttribute('nameserver1');
  }

  // nameserver2 - computed: true, optional: false, required: false
  public get nameserver2() {
    return this.getStringAttribute('nameserver2');
  }

  // nameserver_custom - computed: true, optional: false, required: false
  public get nameserverCustom() {
    return this.getBooleanAttribute('nameserver_custom');
  }

  // soa_email - computed: true, optional: false, required: false
  public get soaEmail() {
    return this.getStringAttribute('soa_email');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
